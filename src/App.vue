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
    <!-- <RouterLink @click="toggleSidebar" class="top-bar-cart-link"> -->
    <!--   <i class="icofont-cart-alt icofont-1x"></i> -->
    <!--   <span>Cart ({{ Object.keys(cart).length }})</span> -->
    <!-- </RouterLink> -->
  </header>

  <router-view/>
</template>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
  }
</style>
