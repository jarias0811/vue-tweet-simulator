import { ref } from 'vue';

export default function useFormTweet(): any {
  const showForm = ref(false);

  const toggleForm = () => {
    showForm.value = !showForm.value;
  };

  return {
    showForm,
    toggleForm,
  };
}
