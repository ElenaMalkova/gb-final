<template>
  <div>
    <section class="center">
        <div class="main-banner__text-box">
          <h1 class="main-banner__heading">Новости</h1>
      </div>
    </section>

    <section class="center def-paddings news-articles">
      <h2 class="center_content span-columns">Последние новости</h2>
      <ArticleTemplate :articles="newsArticles" />
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ArticleTemplate from "@/components/ArticleTemplate.vue";

export default {
  name: 'NewsView',
  components: {
    ArticleTemplate,
  },
  computed: {
    ...mapGetters(['getSortedArticlesByPage']),
    newsArticles() {
      return this.getSortedArticlesByPage('news');
    },
  },
}
</script>