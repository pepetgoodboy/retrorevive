<template>
  <header
    class="w-full sticky bg-white top-0 z-50 px-8 py-4 md:px-10 lg:px-20 md:py-4"
  >
    <div class="flex justify-between">
      <!-- Logo -->
      <div class="flex items-center gap-x-12">
        <div class="flex gap-x-1 items-center">
          <img
            src="/public/images/logo.png"
            alt="Logo"
            width="50"
            height="50"
          />
          <h1 class="text-xl font-noto text-primary">retrorevive</h1>
        </div>
        <div class="hidden md:flex items-center gap-x-8 text-sm font-dmsans">
          <NuxtLink to="#home" class="text-slate-500 hover:text-primary"
            >Home</NuxtLink
          >
          <NuxtLink to="#about" class="text-slate-500 hover:text-primary"
            >About</NuxtLink
          >
          <NuxtLink to="#gallary" class="text-slate-500 hover:text-primary"
            >Gallary</NuxtLink
          >
          <NuxtLink to="#contact" class="text-slate-500 hover:text-primary"
            >Contact</NuxtLink
          >
        </div>
      </div>
      <div class="flex items-center md:hidden">
        <button @click="toggleMenu" type="button">
          <Icon name="ic:sharp-menu" class="text-primary" size="30" />
        </button>
      </div>
      <div class="hidden md:block">
        <NuxtLink to="#">
          <button
            class="px-6 py-2 bg-primary hover:bg-secondary font-dmsans text-sm text-white rounded-full sm:ml-6"
          >
            Warehouse
          </button>
        </NuxtLink>
      </div>
    </div>
    <!-- Menu Mobile -->
    <div>
      <div
        v-if="isOpen"
        class="fixed bg-black/20 w-full h-screen top-0 left-0 backdrop-blur-sm"
      ></div>
      <nav
        :class="isOpen ? 'block' : 'hidden'"
        class="absolute right-0 top-4 w-[300px] bg-white border px-6 py-6 space-y-6 rounded-lg"
      >
        <div class="flex items-center justify-between">
          <NuxtLink
            to="#home"
            class="block px-2 py-1 text-slate-500 hover:text-primary text-sm font-dmsans"
            @click="toggleMenu"
            >Home</NuxtLink
          >
          <Icon
            name="material-symbols:close"
            size="30"
            @click="toggleMenu"
            class="cursor-pointer text-primary"
          />
        </div>
        <NuxtLink
          to="#about"
          class="block px-2 py-1 text-slate-500 hover:text-primary text-sm font-dmsans"
          @click="toggleMenu"
          >About</NuxtLink
        >
        <NuxtLink
          to="#gallary"
          class="block px-2 py-1 text-slate-500 hover:text-primary text-sm font-dmsans"
          @click="toggleMenu"
          >Gallary</NuxtLink
        >
        <NuxtLink
          to="#contact"
          class="block px-2 py-1 text-slate-500 hover:text-primary text-sm font-dmsans"
          @click="toggleMenu"
          >Contact</NuxtLink
        >
        <NuxtLink to="#">
          <button
            class="px-6 py-2 mt-6 bg-primary hover:bg-secondary font-dmsans text-white rounded-full font-thin"
            @click="toggleMenu"
          >
            Warehouse
          </button>
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
