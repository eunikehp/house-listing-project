

import { createStore } from 'vuex';
import axios from 'axios';
import { ENDPOINTS, API_KEY, API_BASE_URL } from '@/apiConfig';

export default createStore({
  state: {
    houses: [],
    filteredHouses: []
  },
  mutations: {
    SET_HOUSES(state, houses) {
      state.houses = houses;
      state.filteredHouses = houses;
    },
    SET_FILTERED_HOUSES(state, filteredHouses) {
      state.filteredHouses = filteredHouses;
    },
  },
  actions: {
    async fetchDatafromAPI({ commit }) {
      try {
        const response = await axios.get(API_BASE_URL, { headers: { 'X-Api-Key': API_KEY } })
        commit('SET_HOUSES', response.data);
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    },
  },
  getters: {
    houses: (state) => state.houses,
    filteredHouses: (state) => state.filteredHouses,
  }
})
