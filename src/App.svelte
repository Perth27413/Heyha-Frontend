<script lang="ts">
	import Layout from './components/Layout/Layout.svelte'
	import { Router, Route } from "svelte-routing"
	import Home from './components/Home/Home.svelte'
	import Login from './components/Login/Login.svelte'
	import Register from './components/Register/Register.svelte'
	import ProductDetails from './components/ProductDetails/ProductDetails.svelte'
	import { getIsLogin } from './store/user'
	import Cart from './components/Order/Carts.svelte'
	import ConfirmOrder from './components/Order/ConfirmOrder.svelte'
	import OrderDetails from './components/Order/OrderDetails.svelte'

	function animateTitle(): void {
		document.title = document.title.substring(1)+document.title.substring(0,1)
    setTimeout(animateTitle, 150)
	}
	animateTitle()
	
</script>

<main>
	<Router>
		<div>
			<Route path="/"><svelte:component this={Layout} Component={Home}/></Route>
			<Route path="/product/:id" let:params><svelte:component this={Layout} Component={ProductDetails} params={params}/></Route>
			<Route path="/login"><svelte:component this={Layout} Component={Login} isLogin={getIsLogin()}/></Route>
			<Route path="/register"><svelte:component this={Layout} Component={Register} isLogin={getIsLogin()}/></Route>
			<Route path="/user/:id/cart" let:params><svelte:component this={Layout} Component={Cart} params={params} isLogin={getIsLogin()}/></Route>
			<Route path="/user/:id/confirm"><svelte:component this={Layout} Component={ConfirmOrder}/></Route>
			<Route path="/user/:id/order/:orderId" let:params><svelte:component this={Layout} Component={OrderDetails} params={params}/></Route>
			<Route path="*"><svelte:component this={Layout} Component={Home}/></Route>
		</div>
	</Router>
</main>

<style>
	
</style>