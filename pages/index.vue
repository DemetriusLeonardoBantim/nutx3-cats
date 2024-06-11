<template>
<div class="flex flex-col min-h-screen">
  <Header />
  <div class="flex-grow bg-pale flex flex-col md:grid md:grid-cols-2 gap-4">
    <div class="flex flex-col items-center justify-center p-4">
      <div class="video-item mb-4">
        <CatDescription :description="catsData[randomIndex]" />
      </div>
      <div class="flex justify-center w-full">
        <Button @click="handleDescription" class="w-50 h-14" />
      </div>
    </div>

    <div class="row-span-2 md:col-start-2 row-start-1 p-4">
      <div class="grid grid-cols-2 grid-rows-2 gap-4">
        <img src="../images/kitty1.webp" class="row-span-2 w-full h-full max-w-md max-h-md object-cover" />
        <img src="../images/kitty2.webp" class="w-full h-full max-w-md max-h-md object-cover" />
        <img src="../images/kitty3.webp" class="col-start-2 w-full h-full max-w-md max-h-md object-cover" />
      </div>
    </div>
  </div>
</div>

</template>

<script setup>
import { useCatsStore } from '@/stores/cats';const randomIndex = ref(0);

  const catsStore = useCatsStore()

const saveCats = catsStore.saveCats;
const cats = ref()

const handleDescription = () => {
    randomIndex.value = Math.floor(Math.random() * 90);
};

const {
  data: catsData,
  pending,
  error,
  refresh,
  status,
} = useLazyFetch('https://meowfacts.herokuapp.com/?count=100', {
  transform: (catsData) => {
    console.log(catsData)
    saveCats(catsData.data)
    return catsData.data
  },
  query: {
    page: cats,
  },
});

</script>
