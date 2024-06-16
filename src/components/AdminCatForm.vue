<template>
  <h2>ID: {{ lastId }}</h2>

  <form @submit.prevent="submit">
    <label>Images:
      <input type="file" @change="onFileChange" multiple>
    </label>
    <label>Name:
      <input type="text" v-model="form.name">
    </label>
    <label>Age:
      <input type="number" v-model.number="form.age.years"> years
      <input type="number" v-model.number="form.age.months"> months
    </label>
    <label>Gender:
      <select v-model="form.gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </label>

    <label>Sterilization:
      <input type="checkbox" v-model="form.sterilization">
    </label>
    <label>Health:
      <input type="checkbox" v-model="form.health">
    </label>
    <label v-if="form.health">Health Description:
      <textarea v-model="form.healthDescription"></textarea>
    </label>
    <label>Description:
      <textarea v-model="form.description"></textarea>
    </label>
    <label>Help Wanted:
      <input type="checkbox" v-model="form.helpWanted">
    </label>
    <label v-if="form.helpWanted">Help Description:
      <textarea v-model="form.helpDescription"></textarea>
    </label>
    <button type="submit">Submit</button>
  </form>
  <div v-if="isModalVisible" class="modal">
    <h2>Данные успешно сохранены!</h2>
    <button @click="resetAndAddAnother">Добавить</button>
    <button @click="hideModal">Выйти</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['lastId'])
  },
  data() {
    return {
      form: {
        id: null,
        images: [],
        name: '',
        age: { years: null, months: null },
        gender: 'male',
        sterilization: false,
        health: false,
        healthDescription: '',
        description: '',
        helpWanted: false,
        helpDescription: ''
      },
    };
  },
  methods: {
    onFileChange(e) {
      this.form.images = [...e.target.files];
    },
    resetAndAddAnother() {
      this.resetForm();
      this.isModalVisible = false;
    },
    hideModal() {
      this.isModalVisible = false;
    },
    resetForm() {
      this.form = {
        id: this.lastId, // id будет установлен на последний id из хранилища
        images: [],
        name: '',
        age: { years: null, months: null },
        gender: 'male',
        sterilization: false,
        health: false,
        healthDescription: '',
        description: '',
        helpWanted: false,
        helpDescription: ''
      };
    },
    fetchFormData() {
      const data = JSON.parse(localStorage.getItem('data')); // загрузка сохраненных данных
      if(data !== null){
        this.form = data;
      }
    },
    submit() {
      this.form.id = this.lastId;
      this.$store.dispatch('submitForm', this.form);
      localStorage.setItem('data', JSON.stringify(this.form)); // сохранение данных формы
      this.resetForm();
      this.isModalVisible = true;
    },
    created() {
      this.fetchFormData();
    },

  },
};
</script>