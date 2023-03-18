<template>
  <main class="wrapper">
    <h1>Products</h1>
    <div class="card-container">
      <ProductCard
        v-for="(product, index) in inventory"
        :key="product.id"
        class="card"
        :index="index"
        :add-to-cart="addToCart"
        :product="product"
      />
    </div>
  </main>
</template>

<script lang="js">
import ProductCard from '@/components/ProductCard.vue'

export default {
  props: ['inventory', 'addToCart'],
  components: {
    ProductCard
  }
}
</script>
