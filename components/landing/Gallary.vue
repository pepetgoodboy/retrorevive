<template>
  <section id="gallary">
    <div class="flex flex-col gap-6 py-8 sm:py-8 lg:py-10 px-8 sm:px-6 md:px-8 lg:px-20" data-aos="fade-right">
      <h2
        class="text-3xl sm:text-5xl font-exo2 font-semibold"
      >
        Gallary.
      </h2>
      <h3 class="text-4xl sm:text-6xl font-exo2 font-semibold"">50+ <span class="text-primary">Years</span> Experience</h3>
    </div>
    <div class="lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 lg:gap-3">
      <div v-for="gallarys in gallary" :key="gallarys.id">
        <div class="flex flex-col items-center" data-aos="fade-down">
          <img :src="gallarys.image" alt="shoes5" class="max-w-52 mx-auto border hover:border-primary rounded-xl" />
          <h4 class="py-5 text-xl font-dmsans font-semibold">{{ gallarys.name }}</h4>
          <p class="font-dmsans">Size: <span class="font-semibold">{{ gallarys.size }}</span></p>
          <p class="font-dmsans">Price: <span class="font-semibold">{{ gallarys.price }}</span></p>
          <div class="py-5">
            <button class="px-6 py-2 bg-primary hover:bg-secondary text-white font-medium rounded-lg">Go to Warehouse</button>
          </div>
        </div>
      </div>  
    </div>
  </section>
</template>

<script setup lang="ts">
const gallary = [
  {
    id: 1,
    name: "Jimara Boot",
    size: "38 - 44",
    price: "Rp 1.789.000",
    image: "/images/jimara.png",
  },
  {
    id: 2,
    name: "Marlow Chukka Boots",
    size: "38 - 44",
    price: "Rp 1.789.000",
    image: "/images/marlow.png",
  },
  {
    id: 3,
    name: "Flint Dress Boots",
    size: "38 - 44",
    price: "Rp 1.951.000",
    image: "/images/flint.png",
  },
  {
    id: 4,
    name: "Clotilde Flats",
    size: "38 - 44",
    price: "Rp 1.902.000",
    image: "/images/clotilde.png",
  },
] 

</script>
