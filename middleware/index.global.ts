export default defineNuxtRouteMiddleware((to, from) => {
  const { params, query, meta, fullPath, path, name, redirectedFrom } = to;

  if (path === "/home") return navigateTo("/");
});
