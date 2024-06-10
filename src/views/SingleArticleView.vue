<template>
  <ArticleFull :article="article" />
</template>

<script>
import ArticleFull from '@/components/ArticleFull.vue';

export default {
  components: {
    ArticleFull,
  },
  computed: {
    article() {
      return this.$store.state.articles.articles.find(
          article => article.id.toString() === this.$route.params.id
      );
    },
  },
};
</script>