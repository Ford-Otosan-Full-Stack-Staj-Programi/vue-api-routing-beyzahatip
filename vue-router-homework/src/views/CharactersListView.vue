<script setup>
import { ref, onMounted } from "vue"
import { getCharacters } from "@/service/characters"
import {RouterLink} from "vue-router"
    
const characters = ref([])

onMounted(async () => {
  characters.value = await getCharacters()
})

</script>

<template>
  <div class="characters">
    <h3 class="characters__title">All Characters</h3>
    <div class="characters__item" v-for="character in characters" :key="character.id">
      <router-link :to="{ name: 'characterDetail', params: { id: character.id } }">
        {{ character }} 
      </router-link> 
    
    </div>
       
  </div>
</template>

<style lang="scss" scoped>
.comcharactersments {
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;

  &__title {
    margin: 0;
    padding: 0;
    font-size: 28px;
  }

  &__item {
    margin: 0 0 16px;
    padding: 0px;

    font-size: 16px;
    font-weight: 600;

    border-bottom: 2px solid salmon;
  }
}
</style>