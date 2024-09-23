<script setup>

</script>

<template>
  <header class="max-w-screen-xl w-full mx-auto px-4 sm:px-8 border-b border-b-primary">
    <nav class="py-8 max-w-screen-lg mx-auto">
      <ul class="hidden md:grid grid-cols-3 w-full justify-between items-center">
        <li class="mr-auto">
          <a class="hover:underline" href="#">NETTBUTIKK</a>
        </li>
        <li class="mx-auto">
          <router-link to="/">
            <img src="../assets/fdflogo.svg" alt="">
          </router-link>
        </li>
        <li class="ml-auto">
          <router-link class="hover:underline" to="/om-oss">OM OSS</router-link>
        </li>
      </ul>
      <div class="flex md:hidden gap-6 w-full flex-col items-center">
          <router-link class="flex" to="/">
            <img src="../assets/fdflogo.svg" alt="">
          </router-link>
        <div class="flex gap-12">
          <a class="hover:underline" href="#">NETTBUTIKK</a>
          <router-link class="hover:underline" to="/om-oss">OM OSS</router-link>
        </div>
      </div>
    </nav>
    
  </header>
</template>
