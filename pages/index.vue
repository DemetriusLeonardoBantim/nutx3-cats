<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <div class="flex-grow bg-pale flex items-center justify-center flex-col">
        <div class="video-item">
          <CatDescription :description="cats[randomIndex]"/>
        </div>
      <Button @click="handleDescription" />
    </div>
  </div>
</template>

<script setup>
import { useCatsStore } from '@/stores/cats';

const catsStore = useCatsStore();

const cats = catsStore.cats;
const fetchCats = catsStore.fetchCats;
const randomIndex = ref(0);


const handleDescription = () => {
    randomIndex.value = Math.floor(Math.random() * 99);
};

onMounted(() => {
  fetchCats();
});
</script>
