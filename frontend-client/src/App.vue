<template>
  <HeaderComponent
    :toggleSidebar="toggleSidebar"
    :calculateTotalItems="calculateTotalItems"
  />

  <SidebarComponent
    v-if="showSidebar"
    :toggle="toggleSidebar"
    :cart="cart"
    :inventory="inventory"
    :remove="removeItem"
  />

  <router-view :inventory="inventory" :addToCart="addToCart"/>

  <FooterComponent/>
</template>

<script lang="js">

import SidebarComponent from '@/components/SidebarComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

import food from './food.json'

export default {
  components: {
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  },
  data () {
    return {
      showSidebar: false,
      inventory: food,
      cart: {}
    }
  },
  methods: {
    addToCart (name, quantity) {
      if (!this.cart[name]) {
        this.cart[name] = 0
      }

      this.cart[name] += quantity
    },
    toggleSidebar () {
      this.showSidebar = !this.showSidebar
    },
    removeItem (key) {
      delete this.cart[key]
    },
    calculateTotalItems () {
      return Object.keys(this.cart).length
    }
  }
}
</script>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
  }
</style>
