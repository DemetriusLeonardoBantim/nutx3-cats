import axios from 'axios';

export const useCatsStore = defineStore(
  "videos",
  () => {
    const cats = ref<any[]>([]);
    const loading = ref(false);
    const error = ref<string | null>(null);

    const fetchCats = async () => {
      loading.value = true;
      error.value = null;
      try {
        const response = await axios.get('https://meowfacts.herokuapp.com/?count=100');
        cats.value = response.data.data;

      } catch (err) {
        error.value = 'Erro ao buscar os gatos';
      } finally {
        loading.value = false;
      }
    };

    return { cats, fetchCats };
  },
  {
    persist: {
      storage: persistedState.sessionStorage,
    },
  }
);
