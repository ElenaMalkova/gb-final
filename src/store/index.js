import { createStore } from 'vuex';
import articles from "./modules/articles.js";
import projects from "./modules/projects.js";


export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    articles,
    projects,
  },
});