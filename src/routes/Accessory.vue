<script setup>
import { computed } from 'vue'
import { useStore } from "vuex"

const store = useStore();

const acce = computed(() => {
  return store.state.goods.acce
})
</script>

<template>
  <main class="pt-16">
    <section class="container mx-auto px-4 2xl:px-20 w-full mt-10 mb-20">
      <div class="text-sm breadcrumbs">
        <ul>
          <li>홈</li> 
          <li>액세서리</li>
        </ul>
      </div>
      
      <section class="pt-12 pb-8 container mx-auto">
        <h2 class="pb-8 text-4xl font-bold text-center">액세서리</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 w-full gap-6">
          <!-- 상품 v-for -->
            <div 
              v-for="{ id, title, price, image } in acce" :key="id"
              class="card card-compact bg-gray-100 grid flex-grow dark:bg-gray-700 cursor-pointer border-solid border border-gray-200 dark:border-none"
            >
              <RouterLink :to="'/product/' + id">
                <figure class="bg-white overflow-hidden h-80"><img :src="image" alt="상품 이미지" class="object-contain h-1/2 w-1/2" /></figure>
                <div class="card-body h-44">
                  <h2 class="card-title text-sm xl:text-base">{{ title }}</h2>
                  <p class="text-sm xl:text-base">${{ price }}</p>
                </div>
              </RouterLink>
            </div>
        </div>
      </section>
    </section>
  </main>
</template>