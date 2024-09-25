<script setup>

</script>

<template>
<footer class="w-full bg-primary px-4 sm:px-6">
  <div class="max-w-screen-xl pt-10 pb-10 md:pb-16 mx-auto gap-y-10 flex flex-col md:flex-row w-full justify-between">
    <img src="../assets/fdflogowhite.svg" class="h-auto w-max self-center" alt="">
    <div class="flex text-white flex-row gap-12 md:gap-32 justify-center">
      <div class="flex flex-col items-center md:items-start gap-4">
        <a class="hover:underline" href="">Nettbutikk</a>
        <router-link class="hover:underline" to="/om-oss">Om oss</router-link>
      </div>
      <div class="flex flex-col gap-4 items-center md:items-start">
        <a class="hover:underline" href="https://www.instagram.com/frognerdruedrikk" target="_blank">Instagram</a>
        <a class="hover:underline">Vivino</a>
      </div>
    </div>
  </div>
  <hr class="border-b-white max-w-screen-xl mx-auto">
  <small class="text-white flex justify-center py-8">© 2024 Frognerveien 33 AS | Org. nr. 933 911 292</small>
</footer>
</template>
