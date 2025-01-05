import { reactive } from "@quiver-js";

export const layoutStore = reactive({
  loggedIn: false,
});

export function login() {
  layoutStore.loggedIn = true;
}
