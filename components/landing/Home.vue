<template>
  <section
    id="home"
    class="flex flex-col lg:flex-row py-2 sm:py-8 lg:py-10 xl:py-12 px-8 sm:px-6 md:px-8 lg:px-20"
  >
    <div class="w-full lg:w-[55%]" data-aos="fade-right">
      <h2
        class="uppercase text-4xl sm:text-5xl font-exo2 font-semibold leading-[62px] sm:leading-[65px] xl:leading-[70px]"
      >
        Walk the Classic Path, Leave a Timeless Impression.
      </h2>
      <p
        class="text-slate-500 mt-6 lg:mt-4 text-xl leading-9 lg:leading-7 xl:leading-10"
      >
        Experience timeless sophistication with our classic footwear collection,
        blending heritage craftsmanship with contemporary comfort for the modern
        individual.
      </p>
      <NuxtLink to="/login">
        <button
          class="px-8 py-4 lg:px-6 lg:py-2 text-lg lg:text-base bg-primary hover:bg-secondary text-white rounded-full font-medium mt-10"
        >
          Go to Warehouse
        </button>
      </NuxtLink>
    </div>
    <div
      class="w-full md:items-center lg:w-[45%] pt-14 lg:pt-0"
      data-aos="fade-left"
    >
      <img
        src="/public/images/shoes1.png"
        alt="shoes4"
        class="max-w-sm lg:max-w-[390px] xl:max-w-lg mx-auto"
      />
    </div>
  </section>
</template>
