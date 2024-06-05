<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <div class="flex-grow bg-pale flex items-center justify-center flex-col">
        <div class="video-item">
          <CatDescription :description="catsData[randomIndex]"/>
        </div>
      <Button @click="handleDescription" />
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
    saveCats(catsData.data)
    return catsData.data
  },
  query: {
    page: cats,
  },
});

</script>
