<script setup>
import { Carousel, Slide, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { ref } from 'vue'

const images = ref([
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1551715789-d7b5cfccd1c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    des: '뒷모습까지 예쁜 청바지!',
    to: '/fashion'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1620291699655-d958150a3ff8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    des: '나를 더 빛나게 해주는 악세사리!',
    to: '/accessory'
  },
  {
    id: 3,
    url:'https://images.unsplash.com/photo-1505714197102-6ae95091ed70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    des: '굶지말고 맛있게 다이어트하자!',
    to: '/salad'
  }
])
</script>

<template>
  <Carousel :wrap-around="true" :items-to-scroll="1" :items-to-show="1" :autoplay="4000">
    <Slide v-for="image in images" :key="image.id">
      <RouterLink :to="image.to" style="max-height: 700px; width: 100%; object-fit: cover;" class="relative">
        <h2 class="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-bold absolute left-0 top-1/3 pl-10 lg:pl-36 2xl:pl-60">
          <span class="">{{ image.des }}</span>
          <span class="text-base block text-left text-white font-normal py-1.5 pl-px">더 자세히 알아보기</span>
        </h2>
        <img :src="image.url" :alt="'캐러셀 이미지' + image.id" style="max-height: 700px; width: 100%; object-fit: cover;" />
      </RouterLink>
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<style lang="scss">
.carousel {
  display: block;
  overflow: hidden;
  width: 100%;
}
.carousel__pagination > .carousel__pagination-item > .carousel__pagination-button {
  width: 30px
}
</style>