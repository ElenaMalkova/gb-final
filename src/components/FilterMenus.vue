<template>
  <div class="filter-box">
    <div v-for="(filter, key) in filters" :key="key">
      <label class="filter-label">{{ labels[key] }}</label>
      <div
          class="filter-menu"
          :class="{ 'active-filter': isActiveFilter(key) }"
          :style="{ width: maxWidths[key] + 'px' }"
          @click="dropdowns[key] = !dropdowns[key]"
          @mouseleave="dropdowns[key] = false"
          ref="dropdowns"
      >
        <div class="filter-option"><span class="filter-text">{{ filter }}</span></div>
        <div class="filter-options" v-if="dropdowns[key]">
          <div
              class="filter-option"
              v-for="option in getFilteredOptions(key)"
              :key="option.value"
              @click.stop="setFilter(key, option.value)"
          >
            {{ option.label }}
          </div>
        </div>
      </div>
    </div>
    <button class="reset-button" @click="resetFilters"  @mouseover="expandAndShadow" @mouseleave="shrinkAndNoShadow">Отменить фильтры</button>
  </div>
</template>

<script>
import buttonEffectsMixin from './mixins/buttonEffectsMixin.js';

export default {
  mixins: [buttonEffectsMixin],

  data() {
    return {
      maxWidths: {},
      labels: {
        forHome: 'Дом:',
        age: 'Возраст:',
        gender: 'Пол:',
        health: 'Здоровье:',
        helpWanted: 'Нужна помощь:',
      },
      filters: {
        forHome: 'Все',
        age: 'Любой',
        gender: 'Любой',
        health: 'Все',
        helpWanted: 'Все',
      },
      dropdowns: {
        forHome: false,
        age: false,
        gender: false,
        health: false,
        helpWanted: false,
      },
      options: {
        forHome: [
          {label: 'Все', value: 'All'},
          {label: 'Ищут дом', value: 'true'},
          {label: 'Дикие', value: 'false'},
        ],
        age: [
          {label: 'Любой', value: 'All'},
          {label: 'Меньше года', value: 'less than a year'},
          {label: '1—4 года', value: '1-4 years'},
          {label: 'Больше 5 лет', value: 'more than 5 years'},
        ],
        gender: [
          {label: 'Любой', value: 'All'},
          {label: 'Кот', value: 'male'},
          {label: 'Кошка   ', value: 'female'},
        ],
        health: [
          {label: 'Все', value: 'All'},
          {label: 'Требует внимания', value: 'true'},
          {label: 'Здоровье в норме', value: 'false'},
        ],
        helpWanted: [
          {label: 'Все', value: 'All'},
          {label: 'Нужна помощь', value: 'true'},
          {label: 'Все хорошо', value: 'false'},
        ],
      },
    };
  },
  watch: {
    filters: {
      handler() {
        this.$emit('filters-changed', this.filters);
      },
      deep: true,
    },
    dropdowns: {
      handler() {
        this.updateMaxWidths();
      },
      deep: true,
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.updateMaxWidths();
    });
  },
  methods: {
    getFilteredOptions(filter) {
      return this.options[filter].filter(
          (option) => option.label !== this.filters[filter]
      );
    },
    setFilter(filter, value) {
      const foundOption = this.options[filter].find(
          (opt) => opt.value === value
      );
      if (foundOption) {
        this.filters[filter] = foundOption.label;
        this.$emit('filters-changed', this.filters);
        this.dropdowns[filter] = false;
      }
    },
    resetFilters() {
      this.filters = {
        forHome: 'Все',
        age: 'Любой',
        gender: 'Любой',
        health: 'Все',
        helpWanted: 'Все',
      };
      this.dropdowns = {
        forHome: false,
        age: false,
        gender: false,
        health: false,
        helpWanted: false,
      };
      this.$emit('filters-changed', this.filters);
      this.updateMaxWidths();
    },
    isActiveFilter(key) {
      return this.filters[key] !== 'Все' && this.filters[key] !== 'Любой';
    },
    updateMaxWidths() {
      this.$nextTick(() => {
        let newWidths = {};
        for (let label in this.labels) {
          newWidths[label] = this.getMaxWidth(label);
        }
        this.maxWidths = newWidths;
      });
    },
    getMaxWidth(key) {
      const options = this.options[key];
      let maxWidth = 0;
      options.forEach(option => {
        const width = this.getTextWidth(option.label, '16px Arial');
        if (width > maxWidth) {
          maxWidth = width;
        }
      });
      return maxWidth + 32;
    },
    getTextWidth(text, font) {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      context.font = font;
      return context.measureText(text).width;
    },
  },
};
</script>

<style scoped>
/* ваш CSS */
</style>