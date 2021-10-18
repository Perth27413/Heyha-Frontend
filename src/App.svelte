<script lang="ts">
	import Layout from './components/Layout/Layout.svelte'

	function animateTitle(): void {
		document.title = document.title.substring(1)+document.title.substring(0,1);
    setTimeout(animateTitle, 150);
	}

	animateTitle()
</script>

<main>
	<Layout/>
</main>

<style>
	
</style>