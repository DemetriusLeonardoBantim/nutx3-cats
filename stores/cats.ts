import axios from 'axios';

export const useCatsStore = defineStore(
  "videos",
  () => {
    const cats = ref<string[]>([]);

    const saveCats = (newData: string[]) => {
      console.log(newData)
      cats.value = newData
    };

    return { cats, saveCats };
  },
  {
    persist: {
      storage: persistedState.sessionStorage,
    },
  }
);
