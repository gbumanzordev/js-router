import { QueryParams, Routes, UrlParams } from "./interfaces/routes.interface";
import { routes } from "./routes";

export class Router {
  constructor(protected name: string, private routes: Routes) {}

  navigate(path: string, params?: UrlParams, queryParams?: QueryParams) {
    let completePath = path;
    const currentPath = window.location.pathname;
    const foundPath = this.routes.find((route) => route.path === path);
    const h1 = document.getElementsByClassName("brand")[0];

    if (foundPath?.path === currentPath) {
      return;
    }

    if (foundPath) {
      if (params) {
        Object.values(params).map((val) => {
          completePath += completePath !== "/" ? `/${val}` : `${val}`;
        });
      }

      if (queryParams) {
        const qParams: string = Object.entries(queryParams)
          .map(([k, v]) => `${k}=${v}`)
          .join("&");

        completePath += `?${qParams}`;
      }

      history.pushState(
        foundPath.data ? foundPath.data : {},
        foundPath.name,
        completePath
      );
      h1.innerHTML = `You have switched to ${foundPath.name}`;
      return;
    }

    history.pushState({}, "Not Found", "/404");
    h1.innerHTML = `Oops! The path you were trying to go to, wasn't found`;
  }
}

export const router = new Router("main", routes);
