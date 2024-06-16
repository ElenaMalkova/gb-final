<template>
  <div class="cat-card" @mouseover="expandImage" @mouseleave="shrinkImage">
    <div class="cat-card__image-box">
      <img class="cat-card_big__img" :src="cat?.images?.[0]" alt="Картинка кота">
    </div>
    <div class="cat-card__name-box">
      <h3>{{ cat.name }}</h3>
      <div class="icon-box" v-if="cat.helpWanted">
        <img src="@/assets/img/icons/help-wanted_icon.svg" alt="Требуется помощь"
             title="Животное срочно нуждается в помощи">
      </div>
    </div>
    <div class="cat-card__info-box">
      <div class="cat-card__name-box">
        <div>
          <img v-if="cat.gender === 'male'" src="@/assets/img/icons/male_icon.svg" alt="Icon of male" title="Кот">
          <img v-else src="@/assets/img/icons/female_icon.svg" alt="Icon of female" title="Кошка">
        </div>
        <div>
          <img v-if="cat.sterilization" src="@/assets/img/icons/sterilisation_yes_icon.svg" alt="Icon of sterilization"
               title="Стерилизация была">
          <img v-else src="@/assets/img/icons/sterilisation_no_icon.svg" alt="Icon of non sterilization"
               title="Стерилизации не было">
        </div>
        <div v-if="cat.health">
          <img src="@/assets/img/icons/medical-attention_icon.svg" alt="Icon of health"
               title="Животное требует медицинского внимания">
        </div>
      </div>
      <p class="cat-card__age">
        {{
          cat.age.years > 0 ? (cat.age.years === 1 ? cat.age.years + ' г. ' : cat.age.years >= 2 && cat.age.years <= 4 ? cat.age.years + ' г. ' : cat.age.years + ' л. ') : ''
        }}
        {{ cat.age.months > 0 ? cat.age.months + ' мес.' : '' }}
        <!--      {{ cat.age.years > 0 ? (cat.age.years === 1 ? cat.age.years + ' год ' : cat.age.years >= 2 && cat.age.years <= 4 ? cat.age.years + ' года ' : cat.age.years + ' лет ') : '' }}
              {{ cat.age.months > 0 ? (cat.age.months === 1 ? cat.age.months + ' месяц' : cat.age.months >= 2 && cat.age.months <= 4 ? cat.age.months + ' месяца' : cat.age.months + ' месяцев') : '' }}-->
      </p>
    </div>
  </div>
</template>

<script>
import buttonEffectsMixin from './mixins/buttonEffectsMixin.js';

export default {
  mixins: [buttonEffectsMixin],

  props: {
    cat: Object
  },
  methods: {}
}
</script>