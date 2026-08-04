// Shared renderer for interactive examples (examples/*.json).
// Builds a hast-style tree used two ways: the rehype plugin in
// astro.config.mjs embeds it into guide chapters at
// <div data-example="<id>"> placeholders, and the standalone
// /examples/<id>/ pages serialize it with hastToHtml below.
// Interaction is CSS-only (radio + sibling selectors); no client JS.

import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const EXAMPLES_DIR = join(dirname(fileURLToPath(import.meta.url)), '../../examples');

export function listExampleIds() {
  return readdirSync(EXAMPLES_DIR)
    .filter((f) => f.endsWith('.json'))
    .map((f) => f.replace(/\.json$/, ''));
}

export function loadExample(id) {
  if (!/^[a-z0-9-]+$/.test(id)) throw new Error(`bad example id: ${id}`);
  return JSON.parse(readFileSync(join(EXAMPLES_DIR, `${id}.json`), 'utf8'));
}

const el = (tagName, properties = {}, children = []) => ({
  type: 'element',
  tagName,
  properties,
  children,
});
const text = (value) => ({ type: 'text', value });

const VERDICT_CHIP = {
  baseline: 'the baseline',
  correct: 'correct',
  plausible: 'plausible but wrong',
};

function turnNodes(turns) {
  return turns.map((turn) =>
    el('div', { className: ['xmpl-turn', `xmpl-turn-${turn.role}`] }, [
      el('span', { className: ['xmpl-role'] }, [text(turn.role === 'user' ? 'you' : 'agent')]),
      el('div', { className: ['xmpl-text'] },
        turn.text.split('\n\n').map((p) => el('p', {}, [text(p)]))),
    ]),
  );
}

function citeNodes(cites = []) {
  if (!cites.length) return [];
  const links = [];
  cites.forEach((c, i) => {
    if (i > 0) links.push(text(' · '));
    const href = c.startsWith('PF')
      ? '/prose-failure-list/'
      : '/agent-workflow-failure-list/';
    links.push(el('a', { href }, [text(c)]));
  });
  return [el('span', { className: ['xmpl-cites'] }, links)];
}

export function exampleToHast(ex, { heading = true } = {}) {
  const group = `xmpl-${ex.id}`;
  const optionNodes = ex.options.flatMap((opt, i) => {
    const inputId = `${group}-${opt.key.toLowerCase()}`;
    return [
      el('input', {
        className: ['xmpl-radio'],
        type: 'radio',
        name: group,
        id: inputId,
      }),
      el('label', { className: ['xmpl-opt'], htmlFor: inputId }, [
        el('span', { className: ['xmpl-key'] }, [text(opt.key)]),
        el('span', { className: ['xmpl-opt-text'] }, [text(opt.label)]),
      ]),
      el('div', { className: ['xmpl-outcome'] }, [
        ...turnNodes(opt.outcome),
        el('div', { className: ['xmpl-verdict', `xmpl-verdict-${opt.kind}`] }, [
          el('span', { className: ['xmpl-verdict-chip'] }, [
            text(VERDICT_CHIP[opt.kind] ?? opt.kind),
          ]),
          el('p', {}, [text(opt.verdict), text(' '), ...citeNodes(opt.cites)]),
        ]),
      ]),
    ];
  });

  return el('div', { className: ['xmpl'], 'data-xmpl': ex.id }, [
    ...(heading
      ? [
          el('p', { className: ['xmpl-head'] }, [
            el('span', { className: ['chip'] }, [text('TRY IT')]),
            text(` ${ex.title}`),
          ]),
        ]
      : []),
    ...turnNodes(ex.setup),
    el('div', { className: ['xmpl-choice'] }, [
      el('p', { className: ['xmpl-q'] }, [text(ex.prompt)]),
      ...optionNodes,
    ]),
  ]);
}

// Minimal serializer for the constrained tree above (elements + text only).
const escapeText = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escapeAttr = (s) => escapeText(String(s)).replace(/"/g, '&quot;');

function attrName(key) {
  if (key === 'className') return 'class';
  if (key === 'htmlFor') return 'for';
  return key.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
}

const VOID_TAGS = new Set(['input', 'br', 'img', 'hr']);

export function hastToHtml(node) {
  if (node.type === 'text') return escapeText(node.value);
  const attrs = Object.entries(node.properties || {})
    .map(([k, v]) => {
      if (v === false || v == null) return '';
      const name = attrName(k);
      if (v === true) return ` ${name}`;
      const value = Array.isArray(v) ? v.join(' ') : v;
      return ` ${name}="${escapeAttr(value)}"`;
    })
    .join('');
  const inner = (node.children || []).map(hastToHtml).join('');
  return VOID_TAGS.has(node.tagName)
    ? `<${node.tagName}${attrs}>`
    : `<${node.tagName}${attrs}>${inner}</${node.tagName}>`;
}
