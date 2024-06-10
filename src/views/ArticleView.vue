<template>
  <div class="a-page__banner">
    <img src="@/assets/img/blog_img/main-banner.jpg" alt="">
    <div class="a-page__banner_text-box">
      <h2 class="section-heading__title">Articles & News</h2>
      <p class="section-heading__txt">Home / Blog</p>
    </div>
  </div>
  <!--Статьи и новости-->
  <section class="center blog">
    <div class="section-heading no_top-margin indent_left">
      <h2 class="section-heading__title">Latest Post</h2>
    </div>

    <ArticleCardLatest :articleLatest="latestArticle" />
    <div class="section-heading no_top-margin indent_left">
      <h2 class="section-heading__title">Articles & News</h2>
    </div>
    <ArticlePaginator />

  </section>
</template>

<script>
import { mapState } from 'vuex';
import ArticleCardLatest from "@/components/ArticleCardLatest.vue";
import ArticlePaginator from "@/components/ArticlePaginator.vue";

export default {
  name: 'ArticleView',
  components: {
    ArticleCardLatest,
    ArticlePaginator
  },
  computed: {
    ...mapState({
      articles: state => state.articles.articles
    }),
    latestArticle() {
      if (this.articles.length === 0) {
        return null;
      }
      return this.articles.reduce((a, b) => (a.id > b.id ? a : b));
    },
    articlesToShow() {
      return this.articles
          .sort((a, b) => b.id - a.id) // это отсортирует статьи в порядке убывания id
          .slice(0, this.articles.length - 6); // это отбросит последние шесть статей
    }
  }
}
</script>