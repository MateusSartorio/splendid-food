<template>
  <div class="home">
    <div class="splash-container">
      <div class="splash">
        <h1>Splendid Food</h1>
      </div>
    </div>
    <main class="wrapper">
      <h2>Recommended</h2>
      <div class="recommended">
        <ProductCard
          v-for="(product, index) in inventory.slice(0, 3)"
          :key="product.id"
          class="card"
          :index="index"
          :add-to-cart="addToCart"
          :product="product"
        />
      </div>
    </main>
  </div>
</template>

<script lang="js">
import { defineComponent } from 'vue'
import ProductCard from '@/components/ProductCard.vue'

export default defineComponent({
  name: 'HomeView',
  props: ['inventory', 'addToCart'],
  components: {
    ProductCard
  }
})
</script>
