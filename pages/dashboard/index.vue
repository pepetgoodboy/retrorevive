<template>
  <div
    v-if="user"
    class="flex flex-col justify-center items-center min-h-screen gap-6"
  >
    <h1 class="text-2xl font-exo2 font-semibold">
      Welcome, {{ user.fullname }}
    </h1>
    <h1 class="text-xl font-exo2 font-medium">
      Anda Login Sebagai, {{ user.role }}
    </h1>
    <button
      @click="logout"
      class="px-6 py-2 bg-primary hover:bg-secondary text-white font-medium rounded-lg"
    >
      Logout
    </button>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["middleware"],
});

import { useUserStore } from "~/store/user";
import { computed } from "vue";

const userStore = useUserStore();

const user = computed(() => userStore.user);

const logout = () => {
  userStore.logout();
};

const login = () => {
  navigateTo("/login");
};
</script>
