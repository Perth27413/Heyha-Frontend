<script lang="ts">
  import Router from 'svelte-spa-router'
  import NavBar from "../NavBar/NavBar.svelte"
  import Home from "../Home/Home.svelte"
  import Login from '../Login/Login.svelte'
  import Footer from "../Footer/Footer.svelte"
  import ProductDetails from "../ProductDetails/ProductDetails.svelte"
  import Order from "../Order/Order.svelte"
  import Register from "../Register/Register.svelte"

  let isLogin: boolean = false
  const routes = {
    '/': Home,
    '/product/:id': ProductDetails,
    '/order': Order,
    '/login': isLogin ? Home : Login,
    '/register': isLogin ? Home : Register,
    '*': Home,
  }
</script>

<main>
  <div id="layout">
    <div id="navBox">
      <NavBar/>
    </div>
    <div id="bodyBox">
      <Router {routes}/>
    </div>
    <div id="footerBox">
      <Footer/>
    </div>
  </div>
</main>

<style lang="scss">
  @import './Layout.scss';
</style>
