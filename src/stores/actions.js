import axios from 'axios';
import { API_KEY, API_BASE_URL, ENDPOINTS } from '@/apiConfig';

export default {
    async fetchDatafromAPI({ commit }) {
        try {
            const response = await axios.get(API_BASE_URL, { headers: { 'X-Api-Key': API_KEY } })
            // console.log(response)
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
    },
    async fetchListingData({ commit }, houseId) {
        try {
            const response = await axios
                .get(ENDPOINTS.GET_LISTING(houseId), { headers: { 'X-Api-Key': API_KEY } })
            const house = response.data[0]
            console.log(house)
            const newData = {
                ...house,
                hasGarage: house.hasGarage ? 'Yes' : 'No' // Convert boolean to 'yes'/'no'
            }
            console.log(newData)
            commit('SET_SELECTED_HOUSE', newData);
        } catch (error) {
            console.error('Error fetching listing data:', error)
            throw error;
        }
    },
    async editListing({ commit }, { houseId, updatedData }) {
        try {
            const response = await axios.post(ENDPOINTS.UPDATE_LISTING(houseId), updatedData, {
                headers: { 'X-Api-Key': API_KEY, 'Content-Type': 'application/json' }
            })
            console.log('Listing updated:', response.data)
            commit('SET_SELECTED_HOUSE', response.data)
            // this.$router.push({ name: 'Home' })
        } catch (error) {
            console.error('Error updating listing data:', error)
            throw error
        }
    }
}