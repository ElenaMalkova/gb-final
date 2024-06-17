<template>
  <section class="center def-paddings article-top">
    <button class="article-top__button" @mouseover="expandAndShadow" @mouseleave="shrinkAndNoShadow"><img src="@/assets/img/icons/back_icon.svg" alt="Back icon"></button>
    <h2 class="center_content span-columns">{{ cat.name }}</h2>
    <button class="article-top__button" @mouseover="expandAndShadow" @mouseleave="shrinkAndNoShadow"><img src="@/assets/img/icons/forward_icon.svg" alt="Forward icon"></button>
  </section>
  <section class="center def-paddings cat-catalogue">
    <img
        v-for="(img, index) in cat?.images"
        :key="index"
        class="cat-card_big_big__img hover-img span-columns__2"
        :src="img"
        alt="Картинка кота">
  </section>
  <div class="cat-card_big">

    <div class="cat-card_big__description-box">

      <div class="cat-card_big__name-box">
        <h3>{{ cat.name }}</h3>
        <div class="icon-box" v-if="cat.helpWanted">
          <img src="@/assets/img/icons/help-wanted_icon.svg" alt="Требуется помощь"
               title="Животное срочно нуждается в помощи">
        </div>
        <div class="icons">
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
        <div class="age-box">
          <p class="cat-card_big__age">
            {{
              cat.age.years > 0 ? (cat.age.years === 1 ? cat.age.years + ' год ' : cat.age.years >= 2 && cat.age.years <= 4 ? cat.age.years + ' года ' : cat.age.years + ' лет ') : ''
            }}
            {{
              cat.age.months > 0 ? (cat.age.months === 1 ? cat.age.months + ' месяц' : cat.age.months >= 2 && cat.age.months <= 4 ? cat.age.months + ' месяца' : cat.age.months + ' месяцев') : ''
            }}
          </p>
        </div>
      </div>
      <div>
        <div class="help-wanted__box" v-if="cat.helpWanted">
          <p>{{ cat.helpDescription }}</p>
        </div>
        <div class="description">
          {{ cat.description }}
        </div>
      </div>
    </div>
    <div class="btn_read-more">
      <p>Узнать больше</p>
    </div>
  </div>
</template>

<script>
import buttonEffectsMixin from '../components/mixins/buttonEffectsMixin.js';
import CatCard from "@/components/CatCard.vue";

export default {
  components: {CatCard},
  mixins: [buttonEffectsMixin],
  props: {
    cat: Object
  },
  data() {
    return {
      cat: null
    };
  },
  created() {
    const catId = parseInt(this.$route.params.id, 10);
    this.cat = this.$store.getters.getCatById(catId);
  },
  methods: {}

}
</script>