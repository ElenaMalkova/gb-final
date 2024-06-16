<template>
  <div>
    <section class="center">
      <div class="main-banner">
        <div class="main-banner__text-box">
          <h1 class="main-banner__heading">Помощь бездомным кошачьим на территории поселка Отрадное. Спасение,
            передержка, лечение, пристройство.</h1>
        </div>
      </div>
    </section>

    <!--Карточки котов-->
    <section class="center def-paddings cat-catalogue">
      <h2 class="center_content span-columns">Наши подопечные</h2>
      <CatCard v-for="cat in getRandomCats" :cat="cat" :key="cat.id"></CatCard>
      <button class="center_content span-columns btn_big-black" @mouseover="expandAndShadow" @mouseleave="shrinkAndNoShadow">Познакомиться со всеми</button>
    </section>
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex';
import CatCard from '@/components/CatCard.vue';
import buttonEffectsMixin from "@/components/mixins/buttonEffectsMixin";

export default {

  name: 'HomeView',
  mixins: [buttonEffectsMixin],
  components: {
    CatCard,
  },
  computed: {
    ...mapGetters([
      'getRandomCats', // map `this.getRandomCats` to `this.$store.getters.getRandomCats`
    ]),
  },
}
</script>