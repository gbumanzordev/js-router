type QueryParam = string | number;

export interface Route {
  path: string;
  name: string;
  data?: unknown;
}

export type Routes = Route[];

export interface UrlParams {
  [key: string]: any;
}

export interface QueryParams {
  [key: string]: QueryParam;
}
