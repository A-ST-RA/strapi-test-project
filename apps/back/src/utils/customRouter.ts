import { CoreApi } from "@strapi/types";

const customRouter = (innerRouter: CoreApi.Router.Router, extraRoutes: CoreApi.Router.Route[] = []) => {
  let routes: CoreApi.Router.Route[];

  return {
    get prefix() {
      return innerRouter.prefix;
    },
    get routes() {
      if (!routes) routes = [...innerRouter.routes as any, ...extraRoutes];
      return routes;
    },
  };
};