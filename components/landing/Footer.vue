<template>
  <footer class="mt-20">
    <div
      class="flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:px-24 gap-y-6"
    >
      <div class="flex items-center justify-center gap-x-6 font-dmsans text-sm">
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
      <div class="flex items-center justify-center gap-x-6">
        <Icon
          name="ri:twitter-fill"
          size="30"
          class="text-black/90 hover:text-primary"
        />
        <Icon
          name="ri:instagram-fill"
          size="30"
          class="text-black/90 hover:text-primary"
        />
        <Icon
          name="ri:facebook-circle-fill"
          size="30"
          class="text-black/90 hover:text-primary"
        />
      </div>
    </div>
    <div class="mt-14 flex items-center justify-center">
      <p class="text-gray-600 text-sm font-dmsans font-medium py-8">
        &copy; Retro Revive 2024 All right reserved
      </p>
    </div>
  </footer>
</template>
