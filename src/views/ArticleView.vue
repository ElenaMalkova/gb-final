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

    <ArticleCardLatest :articleLatest="latestArticle"/>
    <div class="section-heading no_top-margin indent_left">
      <h2 class="section-heading__title">Articles & News</h2>
    </div>
    <div class="tag-cloud merge-grid">
      <button @click="clearFilter">Показать всё</button>

      <button v-for="tag in uniqueTags" :key="tag" @click="filterByTag(tag)" :class="{ 'tag-selected': selectedTag === tag }">
        {{ tag }}
      </button>

    </div>
    <ArticlePaginator :articles="filteredArticles"/>

  </section>
</template>

<style scoped>
.tag-selected {
  background-color: #ccc;
  color: #000;
}
</style>

<script>
import {mapState} from 'vuex';
import ArticleCardLatest from "@/components/ArticleCardLatest.vue";
import ArticlePaginator from "@/components/ArticlePaginator.vue";

export default {
  name: 'ArticleView',
  data() {
    return {
      selectedTag: null,
      filteredArticles: this.articles,
    };
  },
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
    uniqueTags() {
      const allTags = this.articles.flatMap(article => article.tags);
      return [...new Set(allTags)];
    },
    filteredArticles() {
      if (this.selectedTag) {
        return this.articles.filter(article => article.tags.includes(this.selectedTag));
      } else {
        return this.articles;
      }
    },
  },

  methods: {
    filterByTag(tag) {
      this.selectedTag = tag;
      this.filteredArticles = tag
          ? this.articles.filter(article => article.tags.includes(tag))
          : this.articles;
    },
    clearFilter() {
      this.selectedTag = null;
      this.filteredArticles = this.articles;
    },
  },
}
</script>