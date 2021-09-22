<template>
  <div class="col-md-4">
    <div class="mb-4 listing">
      <router-link :to="{name: 'House', params: { houseId: house.id}}">
        <div class="card shadow elevate-1 selectable">
          <img :src="house.img" alt="listing image" class="rounded-top">
          <div class="card-body">
            <h5 class="d-flex justy-content-between">
              <span> Baths: {{ house.bathrooms }} Beds: {{ house.bedrooms }} Levels: {{ house.levels }}</span>
            </h5>
            <span>Price: ${{ house.price }}</span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { House } from '../models/House'
import { logger } from '../utils/Logger.js'
export default {
  props: {
    house: { type: House, required: true }
  },
  setup(props) {
    return {
      deleteHouse() {
        logger.log('working?')
      }
    }
  }
}
</script>

<style>

</style>
