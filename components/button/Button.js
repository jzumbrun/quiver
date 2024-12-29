import { html } from "https://esm.sh/@arrow-js/core";
import css from "../../lib/css.js";

export default function Button({ onClick, color = "", title = "" }) {
  return html`
    <button class="${buttonClass(color)} small" @click="${() => onClick()}">
      ${title}
    </button>
  `;
}

function buttonClass(color) {
  return css`
    .${"button"} {
      background-color: ${color};
    }
  `;
}
