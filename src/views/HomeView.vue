<template>
  <div class="center">
    <section>
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
      <router-link v-for="cat in getRandomCats" :key="cat.id" :to="{ name: 'cat', params: { id: cat.id } }" class="span-columns__2">
        <CatCard :cat="cat" />
      </router-link>
      <router-link :to="{ name: 'cats' }" class="span-columns">
        <button class="center_content span-columns btn_big-black" @mouseover="expandAndShadow"
                @mouseleave="shrinkAndNoShadow">Познакомиться со всеми
        </button>
      </router-link>
    </section>

    <!-- Текст Помочь котодому -->
    <section class="article mt-80px">
      <ArticleTemplate :articles="[homeArticle1]" v-if="homeArticle1" />
      <p v-else>Статья не найдена</p>
    </section>

    <!-- Что делать? -->
    <section class="article mt-80px">
      <ArticleTemplate :articles="[homeArticle2]" v-if="homeArticle2" />
      <p v-else>Статья не найдена</p>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CatCard from '@/components/CatCard.vue';
import buttonEffectsMixin from "@/components/mixins/buttonEffectsMixin";
import ArticleTemplate from "@/components/ArticleTemplate.vue";

export default {
  name: 'HomeView',
  mixins: [buttonEffectsMixin],
  components: {
    CatCard,
    ArticleTemplate,
  },
  computed: {
    ...mapGetters(['getRandomCats', 'getArticleByPagePlace']),
    homeArticle1() {
      return this.getArticleByPagePlace('home', 1);
    },
    homeArticle2() {
      return this.getArticleByPagePlace('home', 2);
    },
  },
}
</script>