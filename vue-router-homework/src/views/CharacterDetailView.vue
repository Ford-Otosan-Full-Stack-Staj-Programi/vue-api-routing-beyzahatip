<script setup>
import { ref, onMounted } from 'vue';
import { getCharacterById } from '@/service/characters';

const character = ref(null);

onMounted(async () => {
  const id = $route.params.id;
  character.value = await getCharacterById(id);
});
</script>

<template>
  <div v-if="character">
    <h2>{{ character.name }}</h2>
    <img :src="character.image" alt="Character Image">
    <p>Gender: {{ character.gender }}</p>
    <p>Species: {{ character.species }}</p>
    <p>Status: {{ character.status }}</p>
  </div>
</template>