// store/index.js

import { createStore } from 'vuex'
import cats from './modules/cat-cards.js'
import articles from './modules/articles';


const store = createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    cats,
    articles
  },
})

export default store