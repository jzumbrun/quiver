import { html } from "@quiver/core";
import Button from "../../components/button/Button.js";
import { aboutStore } from "./AboutStore.js";
import { homeStore } from "../home/HomeStore.js";

export default function AboutPage() {
  console.log("AboutPage");

  return html`
    <p>Home Store Count 1: ${homeStore.count1}</p>
    <p>About Store Count: ${() => aboutStore.count}</p>
    ${Button({
      title: "Increment About Store Count",
      color: ["purple-ish", "rgb(255,3,240,0.2)"],
      onClick: () => aboutStore.count++,
    })}
  `;
}
