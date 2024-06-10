<template>
  <div>
    <div class="paginator">
      <button :disabled="currentPage <= 0" @click="currentPage--">
        Previous
      </button>

      <!-- Page number buttons -->
      <button
          v-for="page in surroundingPages"
          :key="page"
          @click="goToPage(page)"
          :class="{ 'current-page': currentPage === page }"
      >
        {{ page + 1 }}
      </button>

      <button :disabled="currentPage >= pageCount - 1" @click="currentPage++">
        Next
      </button>

    </div>
    <div class="articles">
      <ArticleCard
          v-for="article in paginatedArticles"
          :key="article.id"
          :article="article"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ArticleCard from '@/components/ArticleCard.vue';

export default {
  name: 'Paginator',
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
    ...mapState({
      articles: state => state.articles.articles.sort((a, b) => b.id - a.id)
    }),
    pageCount() {
      return Math.ceil(this.articles.length / this.perPage);
    },
    paginatedArticles() {
      const start = this.currentPage * this.perPage;
      const end = start + this.perPage;
      return this.articles.slice(start, end); // Returns articles for the current page
    },
    surroundingPages() {
      const start = Math.max(this.currentPage - 1, 0);
      return Array.from(
          { length: Math.min(3, this.pageCount - start) },
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