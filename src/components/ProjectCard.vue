<script>
export default {
  name: 'ProjectCard',
  props: ['project'],
};
</script>

<template>

  <div class="gallery__item">
    <div class="gallery__image tr_70">
      <img :src="project.img[0]" alt="Project image">
    </div>
    <div class="gallery__item-bottom">
      <div class="galery__description">
        <h3 class="description__title">{{ project.heading }}</h3>
        <p class="description__txt">{{ project.topic }}</p>
      </div>
      <button class="round__btn px_70"></button>
    </div>
  </div>


</template>
