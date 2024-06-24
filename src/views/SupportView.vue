<template>
  <div class="center mt-80px">
    <h1>Здесь страница всех Поддержки котодома</h1>
  </div>
</template>


<script>
  import {mapGetters} from 'vuex';
  import ArticleTemplate from "@/components/ArticleTemplate.vue";

  export default {
  name: 'SupportView',
  components: {
  ArticleTemplate,
},
    computed: {
      ...mapGetters(['getArticleByPagePlace']),
      homeArticle1() {
        return this.getArticleByPagePlace('home', 1);
      },
      homeArticle2() {
        return this.getArticleByPagePlace('home', 2);
      },
    },
}
</script>