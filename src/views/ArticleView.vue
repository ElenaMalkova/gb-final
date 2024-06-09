<template>
  <div>
    <section class="articles">
      <ArticleCard
          v-for="article in articles"
          :key="article.id"
          :article="article"
      />
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ArticleCard from '@/components/ArticleCard.vue';

export default {
  name: 'ArticleView',
  components: {
    ArticleCard
  },
  computed: {
    ...mapState({
      articles: state => state.articles.articles
    })
  }
}
</script>