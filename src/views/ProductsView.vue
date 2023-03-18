<template>
  <main class="wrapper">
    <h1>Vegetables</h1>
    <div class="card-container">
      <ProductCard
        v-for="(product, index) in inventory.filter(p => p.type === 'vegetable')"
        :key="product.id"
        class="card"
        :index="index"
        :add-to-cart="addToCart"
        :product="product"
      />
    </div>
    <h1>Fruits</h1>
    <div class="card-container">
      <ProductCard
        v-for="(product, index) in inventory.filter(p => p.type === 'fruit')"
        :key="product.id"
        class="card"
        :index="index"
        :add-to-cart="addToCart"
        :product="product"
      />
    </div>
    <h1>Meat</h1>
    <div class="card-container">
      <ProductCard
        v-for="(product, index) in inventory.filter(p => p.type === 'meat')"
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
