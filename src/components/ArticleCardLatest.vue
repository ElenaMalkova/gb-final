<template>

  <article class="blog__item_latest radius_all_64" v-if="articleLatest">
    <div class="blog__image_latest radius_all_52">
      <img :src="articleLatest.img" alt="Article image">
    </div>
    <div class="blog__item_latest-text">
      <div class="flex_v">
        <h3 class="description__title">{{ articleLatest.heading }}</h3>
        <p class="description__text">{{ articleLatest.preview }}</p>
      </div>
      <div class="blog__item-bottom">
        <p class="blog__date">{{ articleLatest.date }}</p>
        <button class="round__btn px_52"></button>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ArticleCardLatest',
  props: ['articleLatest'],
};
</script>