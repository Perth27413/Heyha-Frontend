<script lang="ts">
  import Promotion from './Promotion.svelte'
  import Filter from './Filter.svelte';
  import ProductLists from './ProductLists.svelte';
  import { onMount } from 'svelte';

  onMount(() => {
    setPath()
  })

  function setPath(): void {
    window.history.replaceState(null, '', '/')
  }
</script>

<main>
  <div id="home">
    <Promotion/>
    <ProductLists/>
  </div>
</main>

<style lang="scss">
  @import './Home.scss';
</style>
