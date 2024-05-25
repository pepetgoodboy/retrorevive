<template>
  <Header />
  <div
    class="flex flex-col lg:flex-row container py-2 sm:py-8 lg:py-10 px-8 sm:px-2 md:px-8 lg:px-20"
  >
    <div class="w-full lg:w-[55%] container">
      <h2
        class="uppercase text-3xl sm:text-5xl font-exo2 font-semibold leading-[50px] sm:leading-[60px] md:leading-[65px] lg:leading-[70px]"
      >
        Walk the Classic Path, Leave a Timeless Impression.
      </h2>
      <p
        class="text-slate-500 mt-6 lg:mt-4 text-xl lg:text-base leading-9 lg:leading-none"
      >
        Experience timeless sophistication with our classic footwear collection,
        blending heritage craftsmanship with contemporary comfort for the modern
        individual.
      </p>
      <button
        class="px-8 py-4 lg:px-6 lg:py-2 text-lg lg:text-base bg-primary text-white rounded-full font-medium mt-10"
      >
        Shop Now
      </button>
    </div>
    <div class="w-full md:items-center lg:w-[45%] pt-14 lg:pt-0">
      <Swiper
        :slides-per-view="1"
        :loop="true"
        :autoplay="{ delay: 3000 }"
        :modules="[SwiperAutoplay, SwiperEffectCreative]"
      >
        <SwiperSlide>
          <img
            src="/public/images/sepatu1.png"
            alt="Slide1"
            class="max-w-sm mx-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/public/images/sepatu2.png"
            alt="Slide2"
            class="max-w-sm mx-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/public/images/sepatu3.png"
            alt="Slide3"
            class="max-w-sm mx-auto"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
  <div
    class="flex flex-col lg:flex-row container py-2 sm:py-8 lg:py-10 px-8 sm:px-2 md:px-8 lg:px-20 gap-4"
  >
    <div class="w-full md:items-center lg:w-[45%] pt-14 lg:pt-0">
      <img src="/public/images/sepatu4.jpg" alt="sepatu4" class="rounded-lg" />
    </div>
    <div class="w-full lg:w-[55%] container">
      <h2
        class="text-3xl sm:text-5xl font-exo2 font-semibold leading-[50px] sm:leading-[60px] md:leading-[65px] lg:leading-[70px]"
      >
        About Retro Revive.
      </h2>
      <p
        class="text-slate-500 mt-6 lg:mt-4 text-xl lg:text-base leading-9 lg:leading-none"
      >
        Retro Revive presents an elegant collection that merges traditional
        sophistication with modern quality. Featuring timeless designs and
        high-quality materials, we offer shoes that are not only beautiful but
        also comfortable and durable. Discover classic styles that suit you and
        add an elegant touch to your everyday steps.
      </p>
    </div>
  </div>
</template>
