<template>
  <header class="top-bar spread">
    <nav class="top-bar-nav">
      <RouterLink to="/" class="top-bar-link">
        <i class="icofont-spoon-and-fork"></i>
        <span>Home</span>
      </RouterLink>
      <RouterLink to="/products" class="top-bar-link">
        <span>Products</span>
      </RouterLink>
      <RouterLink to="/past-orders" class="top-bar-link">
        <span>Past Orders</span>
      </RouterLink>
    </nav>
    <div @click="toggleSidebar" class="top-bar-cart-link">
      <i class="icofont-cart-alt icofont-1x"></i>
      <span>Cart ({{ calculateTotalItems() }})</span>
    </div>
  </header>

  <router-view :inventory="inventory" :addToCart="addToCart"/>

  <SidebarComponent
    v-if="showSidebar"
    :toggle="toggleSidebar"
    :cart="cart"
    :inventory="inventory"
    :remove="removeItem"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SidebarComponent from '@/components/SidebarComponent.vue'
import food from './food.json'

const newFood = food.map(product => {
  return {
    ...product,
    quantity: 0
  }
})

export default defineComponent({
  components: {
    SidebarComponent
  },
  data () {
    return {
      showSidebar: false,
      inventory: newFood as any,
      cart: {} as any
    }
  },
  methods: {
    addToCart (name: string, index: number) {
      if (!this.cart[name]) {
        this.cart[name] = 0
      }

      this.cart[name] += this.inventory[index].quantity
      this.inventory[index].quantity = 0
    },
    toggleSidebar () {
      this.showSidebar = !this.showSidebar
    },
    removeItem (key: string) {
      delete this.cart[key]
    },
    calculateTotalItems () {
      return Object.keys(this.cart).length
    }
  }
})
</script>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
  }
</style>
