// store/index.js

import { createStore } from 'vuex'
import cats from './modules/cat-cards.js'

const store = createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    cats,
  },
})

export default store