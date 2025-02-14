import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("teste", "routes/Teste.tsx"),
] satisfies RouteConfig;
