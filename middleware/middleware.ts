import { useUserStore } from "~/store/user";

export default defineNuxtRouteMiddleware((to, from) => {
  if (!useUserStore().user) {
    return navigateTo("/login");
  }
});
