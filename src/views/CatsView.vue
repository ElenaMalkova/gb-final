<template>
  <section class="center">
    <div class="text-box text-center">
      <h1 class="page-title">Постояльцы нашего котодома</h1>
      <p class="big-text text-center">
        Сейчас у нас живёт {{ totalAnimals }} животных. {{ maleCats }} котиков и {{ femaleCats }}
        кошечек.<br>{{ animalsLookingForHome }} из них ищут свой дом. {{ animalsNeedingHelp }} животным необходима
        помощь.
      </p>
      <p class="small-text">
        <span><img class="icon_24px" src="@/assets/img/icons/female_icon.svg" alt="Icon of female" title="Кошка">&nbsp;—&nbsp;девочки,</span>
        <span><img class="icon_24px" src="@/assets/img/icons/male_icon.svg" alt="Icon of male" title="Кот">&nbsp;—&nbsp;мальчики,</span>
        <span><img class="icon_24px" src="@/assets/img/icons/sterilisation_yes_icon.svg" alt="Icon of sterilization"
                   title="Стерилизация была">&nbsp;—&nbsp;уже стерилизованные,</span>
        <span><img class="icon_24px" src="@/assets/img/icons/sterilisation_no_icon.svg" alt="Icon of non sterilization"
                   title="Стерилизации не было">&nbsp;—&nbsp;ещё нет,</span>
        <span><img class="icon_24px" src="@/assets/img/icons/medical-attention_icon.svg" alt="Icon of health"
                   title="Животное требует медицинского внимания">&nbsp;—&nbsp;требуют&nbsp;медицинского внимания,</span>
        <span><img class="icon_24px" src="@/assets/img/icons/help-wanted_icon.svg" alt="Требуется помощь"
                   title="Животное срочно нуждается в помощи">&nbsp;—&nbsp;требуется помощь</span>
      </p>
    </div>
  </section>

  <!--Карточки котов-->
  <section class="center cat-catalogue">
    <div class="span-columns flex-v_centered gap_24">
      <FilterMenus @filters-changed="updateFilters"></FilterMenus>
    </div>
    <router-link v-for="cat in filteredCats" :key="cat.id" :to="{ name: 'cat', params: { id: cat.id } }" class="span-columns">
      <CatCardBig :cat="cat" />
    </router-link>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import CatCardBig from '@/components/CatCardBig.vue';
import FilterMenus from '@/components/FilterMenus.vue';
import buttonEffectsMixin from "@/components/mixins/buttonEffectsMixin";

export default {
  name: 'CatsView',
  mixins: [buttonEffectsMixin],
  components: {
    CatCardBig,
    FilterMenus,
  },
  data() {
    return {
      filters: {
        forHome: 'Все',
        age: 'Любой',
        gender: 'Любой',
        health: 'Все',
        helpWanted: 'Все',
      },
    };
  },
  computed: {
    ...mapGetters([
      'cats',
    ]),
    filteredCats() {
      return this.cats.filter(cat => {
        return (
            (this.filters.forHome === 'Все' ||
                (this.filters.forHome === 'Ищут дом' && cat.forHome) ||
                (this.filters.forHome === 'Дикие' && !cat.forHome)) &&
            (this.filters.age === 'Любой' ||
                (this.filters.age === 'Меньше года' && cat.age.years < 1) ||
                (this.filters.age === '1—4 года' && cat.age.years >= 1 && cat.age.years <= 4) ||
                (this.filters.age === 'Больше 5 лет' && cat.age.years >= 5)) &&
            (this.filters.gender === 'Любой' ||
                (this.filters.gender === 'Кот' && cat.gender === 'male') ||
                (this.filters.gender === 'Кошка' && cat.gender === 'female')) &&
            (this.filters.health === 'Все' ||
                (this.filters.health === 'Требует внимания' && cat.health) ||
                (this.filters.health === 'Здоровье в норме' && !cat.health)) &&
            (this.filters.helpWanted === 'Все' ||
                (this.filters.helpWanted === 'Нужна помощь' && cat.helpWanted) ||
                (this.filters.helpWanted === 'Все хорошо' && !cat.helpWanted))
        );
      });
    },
    totalAnimals() {
      return this.cats.length;
    },
    maleCats() {
      return this.cats.filter(cat => cat.gender === 'male').length;
    },
    femaleCats() {
      return this.cats.filter(cat => cat.gender === 'female').length;
    },
    animalsLookingForHome() {
      return this.cats.filter(cat => cat.forHome).length;
    },
    animalsNeedingHelp() {
      return this.cats.filter(cat => cat.helpWanted).length;
    },
  },
  methods: {
    updateFilters(newFilters) {
      this.filters = newFilters;
    },
  },
};
</script>

<style scoped>
/* ваш CSS */
</style>