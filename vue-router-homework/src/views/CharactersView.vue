<script setup>
    import {RouterLink} from "vue-router"

</script>
<template>
<main class="characters">
    <aside class="side-menu">
      <nav>
        <RouterLink to="/rickandmorty/all/">List</RouterLink>
      </nav>
    </aside>
    <RouterView></RouterView>
  </main>
</template>
