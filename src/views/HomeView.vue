<template>
  <div class="my-20 space-y-16">
    <section class="flex items-center flex-col gap-6 text-center">
      <h2 class="text-4xl md:text-7xl uppercase text-primary font-standard">SOMMERDROP - <br> T-SKJORTE OG LONGSLEEVE</h2>
      <div class="space-y-2">
        <p class="max-w-xl md:text-lg">Vi feirer sommeren med en helt ny longsleeve og t-skjorte.</p>
        <p class="max-w-xl md:text-lg">To plagg som hyller det gode liv - fylt med leskende vin og fruktbare samtaler.</p>
      </div>
      <a href="https://frognerdruedrikk.myshopify.com" target="_blank" class="bg-primary text-[#F9F6EA] py-2 px-9 hover:bg-transparent border border-primary hover:text-primary rounded-full transition duration-200">Kjøp nå</a>
      <img src="../assets/FDF_SummerDrop_Hero.jpg" alt="Bilde av t-skjorte" class="mt-6">
    </section>
    <hr class="border-primary">
    <section class="flex items-center flex-col gap-8 text-center">
      <h2 class="text-3xl md:text-6xl uppercase text-primary font-standard">Det er ferie nå</h2>
      <p class="max-w-4xl text-xl md:text-4xl font-standard">Frogner Druedrikk Forening handler om å nyte tilværelsen. Lange kvelder med gode venner der vinen flyter, og de gode samtalene dyrkes.</p>
      <router-link class="uppercase hover:underline" to="/om-oss">Les mer om oss</router-link>
      <div class="flex flex-col md:grid md:grid-cols-5 max-w-screen-lg gap-8 mt-10">
        <img class="aspect-auto col-span-3" src="../assets/t-skjorte2.png" alt="">
        <img class="aspect-square col-span-2" src="../assets/t-skjorte3.png" alt="">
      </div>
    </section>
  </div>
</template>
