<script lang="ts">
  import Router from 'svelte-spa-router'
  import NavBar from "../NavBar/NavBar.svelte"
  import Home from "../Home/Home.svelte"
  import Login from '../Login/Login.svelte'
  import Footer from "../Footer/Footer.svelte"
  import ProductDetails from "../ProductDetails/ProductDetails.svelte"
  import Order from "../Order/Order.svelte"
  import Register from "../Register/Register.svelte"
  import { isLogin, getIsLogin } from '../../store/user'
  import { afterUpdate, beforeUpdate, onMount } from 'svelte';

  let loginChecked: boolean = getIsLogin()
  let routes = {
      '/': Home,
      '/product/:id': ProductDetails,
      '/login': loginChecked ? Home : Login,
      '/register': loginChecked ? Home : Register,
      '*': Home,
    }

  onMount(() => {
    isLogin.subscribe(results => loginChecked = results)
  })
  
  function setRoutes(): void {
    let newRoutes = {
      '/': Home,
      '/product/:id': ProductDetails,
      '/login': loginChecked ? Home : Login,
      '/register': loginChecked ? Home : Register,
      '*': Home,
    }
    routes = newRoutes
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
