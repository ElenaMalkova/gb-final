<template>
  <section class="center def-paddings article-top">
    <button
        :class="{'disabled-button': isPrevDisabled()}"
        class="article-top__button"
        @mouseover="expandAndShadow"
        @mouseleave="shrinkAndNoShadow"
        @click="goToPrevCat"
        :disabled="isPrevDisabled()"
    >
      <img src="@/assets/img/icons/back_icon.svg" alt="Back icon">
    </button>
    <h2 class="center_content span-columns">{{ cat?.name }}</h2>
    <button
        :class="{'disabled-button': isNextDisabled()}"
        class="article-top__button"
        @mouseover="expandAndShadow"
        @mouseleave="shrinkAndNoShadow"
        @click="goToNextCat"
        :disabled="isNextDisabled()"
    >
      <img src="@/assets/img/icons/forward_icon.svg" alt="Forward icon">
    </button>
  </section>
  <section class="center sigle-cat__info">
    <div class="age-box ml_0">
      <p class="cat-card_big__age">
        {{
          cat.age.years > 0 ? (cat.age.years === 1 ? cat.age.years + ' год ' : cat.age.years >= 2 && cat.age.years <= 4 ? cat.age.years + ' года ' : cat.age.years + ' лет ') : ''
        }}
        {{
          cat.age.months > 0 ? (cat.age.months === 1 ? cat.age.months + ' месяц' : cat.age.months >= 2 && cat.age.months <= 4 ? cat.age.months + ' месяца' : cat.age.months + ' месяцев') : ''
        }}
      </p>
    </div>
    <div class="icons ml_0">
      <div>
        <img v-if="cat.gender === 'male'" src="@/assets/img/icons/male_icon.svg" alt="Icon of male" title="Кот">
        <img v-else src="@/assets/img/icons/female_icon.svg" alt="Icon of female" title="Кошка">
      </div>
      <div>
        <img v-if="cat.sterilization" src="@/assets/img/icons/sterilisation_yes_icon.svg"
             alt="Icon of sterilization"
             title="Стерилизация была">
        <img v-else src="@/assets/img/icons/sterilisation_no_icon.svg" alt="Icon of non sterilization"
             title="Стерилизации не было">
      </div>
      <div v-if="cat.health">
        <img src="@/assets/img/icons/medical-attention_icon.svg" alt="Icon of health"
             title="Животное требует медицинского внимания">
      </div>
    </div>
  </section>
  <section class="center">
    <div class="center help-wanted__box ml_0 mb_24" v-if="cat.helpWanted">
    <p class="help-wanted__text">{{ cat.helpDescription }}</p>
  </div></section>

  <section class="center cat-catalogue gap_16-grid">
    <div
        class="cat-catalogue__image-box span-columns__2"
        v-for="(img, index) in cat?.images"
        :key="index"
    >
      <img class="cat-catalogue__image hover-img" :src="img" alt="Картинка кота"
           @click="openModal(index)"
           @mouseover="expandGaleryImage($event)"
           @mouseleave="shrinkGaleryImage($event)"
      >
    </div>
  </section>

  <section class="center sigle-cat__description def-paddings">
    {{ cat.description }}

  </section>

  <ModalWindow v-if="isModalOpen && cat" :cat="cat" :initialImageIndex="selectedImageIndex"
               @close="closeModal"></ModalWindow>
</template>

<script>
import buttonEffectsMixin from '../components/mixins/buttonEffectsMixin.js';
import CatCard from "@/components/CatCard.vue";
import ModalWindow from "@/components/ModalWindow.vue";

export default {
  components: {
    CatCard,
    ModalWindow
  },
  mixins: [buttonEffectsMixin],
  props: {
    initialCat: Object
  },
  data() {
    return {
      cat: this.initialCat,
      isModalOpen: false,
      selectedImageIndex: 0,
    };
  },
  watch: {
    '$route.params.id': 'fetchCat'
  },
  methods: {
    fetchCat() {
      const catId = parseInt(this.$route.params.id, 10);
      this.cat = this.$store.getters.getCatById(catId) || null;
    },
    openModal(index) {
      this.selectedImageIndex = index;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    goToPrevCat() {
      const prevCatId = this.cat.id - 1;
      if (prevCatId > 0) {
        this.$router.push({name: 'cat', params: {id: prevCatId}});
      }
    },
    goToNextCat() {
      const nextCatId = this.cat.id + 1;
      if (nextCatId <= this.$store.getters.totalAnimals) {
        this.$router.push({name: 'cat', params: {id: nextCatId}});
      }
    },
    isPrevDisabled() {
      return this.cat.id === 1;
    },
    isNextDisabled() {
      return this.cat.id === this.$store.getters.totalAnimals;
    },

  },
  created() {
    this.fetchCat();
  }
}
</script>