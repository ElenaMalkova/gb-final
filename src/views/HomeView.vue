<template>
  <div>
    <section class="center">
      <div class="main radius_all">
        <div class="main__txt-box">
          <h1 class="main__heading">Let Your Home Be Unique</h1>
          <p class="main__txt">There are many variations of the passages of lorem Ipsum fromavailable, majority.</p>
          <button id="get-started_btn"><span>Get Started</span></button>
        </div>
      </div>
    </section>
    <!--Цифры на бежевом фоне-->
    <section class="counter center">
      <div class="counter__item">
        <h3 class="counter__number">12</h3>
        <p class="counter__txt">Years Of Experiance</p>
      </div>
      <div class="counter__item">
        <h3 class="counter__number">85</h3>
        <p class="counter__txt">Success Project</p>
      </div>
      <div class="counter__item">
        <h3 class="counter__number">15</h3>
        <p class="counter__txt">Active Project</p>
      </div>
      <div class="counter__item">
        <h3 class="counter__number">95</h3>
        <p class="counter__txt">Happy Customers</p>
      </div>
    </section>
    <!--Статьи и новости-->
    <section class="center blog">
      <div class="section-heading no_top-margin">
        <h2 class="section-heading__title">Latest Blog Posts</h2>
        <p class="section-heading__txt">It is a long established fact that a reader will be distracted by the of
          readable content of page lookings at its layouts points.</p>
      </div>
      <ArticleCard
          v-for="article in articles"
          :key="article.id"
          :article="article"
      />
    </section>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import ArticleCard from '@/components/ArticleCard.vue';

export default {
  name: 'HomeView',
  components: {
    ArticleCard
  },
  computed: {
    ...mapState({
      articles: state => state.articles.articles.slice(0, 3)
    })
  }
}
</script>