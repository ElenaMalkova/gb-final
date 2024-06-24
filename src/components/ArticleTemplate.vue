<template>
  <div v-for="article in articles" :key="article.id">
    <h2 class="article__header">{{ article.heading }}</h2>
    <div class="article__text" v-html="article.text"></div>
  </div>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
      required: true,
    },
  },
}
</script>