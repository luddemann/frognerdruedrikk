<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <AppHeader />
  <router-view v-slot="{ Component, route }">
    <transition
      enterFromClass="opacity-0"
      enterActiveClass="transition-all duration-700 delay-100 ease-out"
      enterToClass="opacity-100"
      leaveFromClass="opacity-100"
      leaveToClass="opacity-0"
    >
      <main
        :key="route.path"
        class="max-w-screen-xl mx-auto px-4 sm:px-6 grow"
      >
        <component :is="Component" />
      </main>
    </transition>
  </router-view>
  <AppFooter />
</template>
