import { html, css } from "@quiver/core";

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
