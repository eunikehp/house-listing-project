
import { createStore } from 'vuex';
import axios from 'axios';
import { API_KEY, API_BASE_URL } from '@/apiConfig';

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
        console.log(response)
        const newData = response.data.map(house => ({
          ...house,
          hasGarage: house.hasGarage ? 'Yes' : 'No' // Convert boolean to 'yes'/'no'
        }))

        commit('SET_HOUSES', newData);
      } catch (error) {
        console.error('Error fetching data:', error)
        throw error;
      }
    },
    async createNewListing({ commit }, formData) {
      try {
        const response = await axios.post(API_BASE_URL, formData, {
          headers: {
            'X-Api-Key': API_KEY,
            'Content-Type': 'application/json'
          }
        })
        return response
      } catch (error) {
        console.error('Error creating listing:', error)
        throw error;
      }
    }
  },
  getters: {
    houses: (state) => state.houses,
    filteredHouses: (state) => state.filteredHouses,
  }
})
