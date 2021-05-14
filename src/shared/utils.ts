import { router } from "./router";

export const goTo = (event: MouseEvent) => {
  event.preventDefault();

  const clickedPath = (event.target as any).attributes[0].value;
  router.navigate(clickedPath);
};
