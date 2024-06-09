<script>
export default {
  name: 'ArticleCard',
  props: ['article'],
};
</script>

<template>

    <article class="blog__item radius_all_64">
      <div class="blog__image tl_52 tr_52">
        <img :src="article.img" alt="Article image">
        <div class="blog__topic">
          <p class="blog__topic-txt">{{ article.topic }}</p>
        </div>
      </div>
      <h3 class="description__title">{{ article.heading }}</h3>
      <div class="blog__item-bottom">
        <p class="blog__date">{{ article.date }}</p>
        <button class="round__btn px_52"></button>
      </div>
    </article>


</template>
