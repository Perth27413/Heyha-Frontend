<script lang="ts">
	import Layout from './components/Layout/Layout.svelte'
	import { Router, Route } from "svelte-routing";
	import Home from './components/Home/Home.svelte';
	import Login from './components/Login/Login.svelte';
	import Register from './components/Register/Register.svelte';
	import ProductDetails from './components/ProductDetails/ProductDetails.svelte';
	import { getIsLogin } from './store/user';

	function animateTitle(): void {
		document.title = document.title.substring(1)+document.title.substring(0,1);
    setTimeout(animateTitle, 150);
	}
	animateTitle()
</script>

<main>
	<Router>
		<div>
			<Route path="/"><svelte:component this={Layout} Component={Home}/></Route>
			<Route path="/product/:id" let:params><svelte:component this={Layout} Component={ProductDetails} params={params}/></Route>
			{#if !getIsLogin()}
				<Route path="/login"><svelte:component this={Layout} Component={Login}/></Route>
				<Route path="/register"><svelte:component this={Layout} Component={Register}/></Route>
			{/if}
			<Route path="*"><svelte:component this={Layout} Component={Home}/></Route>
		</div>
	</Router>
</main>

<style>
	
</style>