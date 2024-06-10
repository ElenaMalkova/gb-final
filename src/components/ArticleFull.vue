<script>
export default {
  name: 'ArticleFull',
  props: ['article'],
};
</script>

<template>
  <div class="center">
    <div class="section-heading l-r-paddings_yok">
      <h2 class="section-heading__title">{{ article.heading }}</h2>
      <div class="blog__item-bottom">
        <p class="blog__topic-txt">{{ article.topic }}</p>
        <p class="blog__date">{{ article.date }}</p>
      </div>
      <div class="main background-image_yok">
        <img class="big-img" :src="article.img" alt="Article image">

      </div>
      <p class="section-heading__txt">{{ article.text }}</p>
    </div>
  </div>

</template>


<style scoped lang="sass">

</style>