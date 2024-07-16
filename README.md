# house-listing-project

## Description

A web application for house listings, which allows the user to view a list of houses that are currently available for sale, and create, edit and delete their
own listings.

## Key Features

- View a list of available for sale houses
- Search listing based on price, streetname, city, postal code
- View listing details
- Create, edit and delete their own listings.

## Data Models/Vuex Store Layout

1. Listing

- id
- price
- bedrooms
- bathrooms
- size
- description
- streetName
- houseNumber
- numberAddition
- city
- zip
- constructionYear
- hasGarage

2. App-wide State & Getters

- houses
- filteredHouses
- selectedHouse

3. Actions

- fetchDatafromAPI
- createNewListing
- fetchListingData
- editListing

4. Mutations

- SET_HOUSES
- SET_FILTERED_HOUSES
- SET_SELECTED_HOUSE

## Design & Components/Layout

- /home -> Home
- /house/:id -> House Detail
- /create -> Create New Listing
- /house/:id/edit -> Edit Listing
- /about -> About

## Technologies

- Vue JS
- Vue Router
- Vuex

## User Stories

- As a user, I want to be able to see a fixed navigation header, so that I can
  easily navigate through the app.
- As a user, I want to be able to see an overview of all available houses as the
  homepage of the web app, so that I can see what the app has to offer.
- As a user, I want to be able to search through the available houses by at
  least one of the house listing properties, so that I can find specific houses based on search
  criteria.
- As a user, I want to be able to sort the available houses shown on the
  Homepage by at least one option (price or size), so that I can sort based on my preference.
- As a user, I want to be able to access the details of a house, so that I can read
  more in-depth information about my selected house.
- As a user, I want to be able to create my listing(s), by completing all the
  required fields in a form.
- As the owner of a listing, I want to be able to have an edit and delete button
  on the detail page of a house that I own, so that I can navigate to the edit page of my
  listing or delete the listing.
- As the owner of a listing, I want to be able to edit my listing(s).
- As the owner of a listing, I want to be able to delete my listing(s).
