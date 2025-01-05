import { html } from "@quiver/core";

const styleNames = {};

function nameStyle(body, vars) {
  let str =
    "qvr--" + vars.map((v) => `${Array.isArray(v) ? v[0] : v}`).join("--");
  if (!vars.length) {
    const name = Math.random().toString(36).substring(7);
    str = `unnamed-${name}`;
    console.error(
      `[Quiver Error: css 1000] Unnamed style: "${str}". For efficiency provide a unique name for style with body: "${body}"`
    );
  }
  return str;
}

function style(styleName, body, ...vars) {
  vars[0] = styleName;

  html`<style type="text/css" data-name="${vars[0]}">
    ${body.map(
      (b, i) => b + (Array.isArray(vars[i]) ? vars[i][1] : vars[i] || "")
    )}
  </style>`(document.head);
  return vars[0];
}

export default function css(body, ...vars) {
  const styleName = nameStyle(body, vars);
  return styleName in styleNames
    ? styleNames[styleName]
    : (styleNames[styleName] = style(styleName, body, ...vars));
}
