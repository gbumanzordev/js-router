import "./style.css";
import { goTo } from "./shared/utils";
import { routes } from "./shared/routes";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1 class="brand">Hello Vite!</h1>
`;

const nav = document.createElement("nav");
nav.id = "navbar";

app.append(nav);

routes.forEach((route) => {
  const a = document.createElement("a");
  a.setAttribute("href", route.path);
  a.textContent = route.name;

  a.addEventListener("click", goTo);

  nav.append(a);
});
