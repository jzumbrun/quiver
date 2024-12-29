import { html } from "https://esm.sh/@arrow-js/core";

const styleNames = {};

function nameStyle(body, vars) {
  let str = vars.join("-");
  if (!vars.length) {
    const name = Math.random().toString(36).substring(7);
    str = `unnamed-${name}`;
    console.error(
      `[Quiver Error: css 1000] Unnamed style: "${str}". For efficiency provide a unique name for style with body: "${body}"`
    );
  }
  if (vars.length > 1) {
    str = str
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .replace(/[\s_]+/g, "-")
      .toLowerCase();
  }
  return str;
}

function style(styleName, body, ...vars) {
  vars[0] = styleName;

  html`<style type="text/css" data-name="${vars[0]}">
    ${body.map((b, i) => b + (vars[i] || ""))}
  </style>`(document.head);
  return vars[0];
}

export default function css(body, ...vars) {
  const styleName = nameStyle(body, vars);
  return styleName in styleNames
    ? styleNames[styleName]
    : (styleNames[styleName] = style(styleName, body, ...vars));
}
