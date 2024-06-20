<template>
  <div class="modal-overlay center" @click.self="closeModal">
    <button class="modal__button" @click="goToPrevImage"
            @mouseover="addBackgroundColor($event)"
            @mouseleave="removeBackgroundColor($event)"
    >
      <img src="@/assets/img/icons/back_icon.svg" alt="Back icon">
    </button>
    <div class="modal-window">
      <div class="modal__image">
        <img :src="currentImage" alt="Картинка кота" v-if="currentImage">
      </div>
      <h3 class="modal__title text-center">{{ cat?.name }}</h3>
    </div>
    <button class="modal__button" @click="goToNextImage"
            @mouseover="addBackgroundColor($event)"
            @mouseleave="removeBackgroundColor($event)"
    >
      <img src="@/assets/img/icons/forward_icon.svg" alt="Forward icon">
    </button>
  </div>
</template>

<script>
import buttonEffectsMixin from '../components/mixins/buttonEffectsMixin.js';

export default {
  mixins: [buttonEffectsMixin],

  props: {
    cat: Object,
    initialImageIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      imageIndex: this.initialImageIndex
    };
  },
  computed: {
    currentImage() {
      return this.cat?.images[this.imageIndex] || '';
    }
  },
  methods: {
    goToPrevImage() {
      if (this.cat) {
        this.imageIndex = (this.imageIndex - 1 + this.cat.images.length) % this.cat.images.length;
      }
    },
    goToNextImage() {
      if (this.cat) {
        this.imageIndex = (this.imageIndex + 1) % this.cat.images.length;
      }
    },
    closeModal() {
      this.$emit('close');
    },
    closeOnEsc(event) {
      if (event.key === "Escape") {
        this.closeModal();
      }
    },
  },
  mounted() {
    document.addEventListener("keydown", this.closeOnEsc);
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.closeOnEsc);
  },
}
</script>

<style scoped>

</style>