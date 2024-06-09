<template>
    <nav class="center top-menu">
      <router-link :to="{ name: 'home' }"><span class="logo">Interno</span></router-link>
      <ul class="navigation">
        <li class="navigation-item" id="nav-home">
          <router-link :to="{ name: 'home' }">Home</router-link>
        </li>
<!--        <li class="navigation-item" id="nav-project">-->
<!--          <router-link :to="{ name: 'projects' }">Projects</router-link>-->
<!--        </li>-->
        <li class="navigation-item" id="nav-blog">
          <router-link :to="{ name: 'articles' }">Blog</router-link>
        </li>
      </ul>
    </nav>
    <router-view/>
</template>

<style lang="sass">

</style>
<script setup lang="ts">
</script>