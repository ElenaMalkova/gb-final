<template>
  <div>

    <div class="blog">
      <ArticleCard
          v-for="article in paginatedArticles"
          :key="article.id"
          :article="article"
      />
    </div>
  </div>
  <div class="paginator">
    <button class="round__btn px_52" :disabled="currentPage <= 0" @click="currentPage--">
    </button>

    <!-- Page number buttons -->
    <button class="round__btn px_52"
        v-for="page in surroundingPages"
        :key="page"
        @click="goToPage(page)"
        :class="{ 'current-page': currentPage === page }"
    >
      {{ page + 1 }}
    </button>

    <button class="round__btn px_52" :disabled="currentPage >= pageCount - 1" @click="currentPage++">
    </button>

  </div>
</template>

<script>
import ArticleCard from '@/components/ArticleCard.vue';

export default {
  name: 'Paginator',
  props: ['articles'],
  components: {
    ArticleCard
  },
  data() {
    return {
      currentPage: 0, // start from the first page
      perPage: 6, // Num of articles to display per page
    };
  },
  computed: {
    pageCount() {
      return Math.ceil(this.articles.length / this.perPage);
    },
    paginatedArticles() {
      if (!this.articles) {
        return [];
      }

      const start = this.currentPage * this.perPage;
      const end = start + this.perPage;
      return this.articles.slice(start, end);
    },
    surroundingPages() {
      const start = Math.max(this.currentPage - 1, 0);
      return Array.from(
          {length: Math.min(3, this.pageCount - start)},
          (_, i) => start + i
      );
    }
  },
  methods: {
    goToPage(page) {
      this.currentPage = page;
    }
  }
};
</script>

<style scoped>
.current-page {
  background-color: #ccc;
}
</style>