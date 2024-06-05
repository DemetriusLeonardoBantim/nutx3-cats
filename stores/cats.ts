export const useCatsStore = defineStore(
  "cats",
  () => {
    const cats = ref<string[]>([]);

    const saveCats = (newData: string[]) => {
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
