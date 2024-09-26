export default {
    SET_HOUSES(state, houses) {
        state.houses = houses;
        state.filteredHouses = houses;
    },
    SET_FILTERED_HOUSES(state, filteredHouses) {
        state.filteredHouses = filteredHouses;
    },
    SET_SELECTED_HOUSE(state, house) {
        state.selectedHouse = house;
    }
}