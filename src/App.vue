<script setup>
import { ref, onMounted } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import LoadingAnimation from './components/LoadingAnimation.vue'

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 1100)
})
</script>

<template>
  <AppHeader v-if="!isLoading" />
  <router-view v-slot="{ Component, route }">
    <transition
      enterFromClass="opacity-0"
      enterActiveClass="transition-all duration-500 ease-in"
      enterToClass="opacity-100"
      leaveFromClass="opacity-100"
      leaveActiveClass="transition-all ease-out"
      leaveToClass="opacity-0"
      appear
      v-if="!isLoading"
    >
      <main
        :key="route.path"
        class="max-w-screen-xl mx-auto px-4 sm:px-6 grow"
      >
        <component :is="Component" />
      </main>
    </transition>
    <main class="h-screen grow" v-else>
      <LoadingAnimation />
    </main>
  </router-view>
  <AppFooter v-if="!isLoading" />
</template>
