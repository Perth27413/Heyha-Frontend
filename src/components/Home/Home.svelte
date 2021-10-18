<script lang="ts">
  import Promotion from './Promotion.svelte'
  import Filter from './Filter.svelte';
  import ProductLists from './ProductLists.svelte';
</script>

<main>
  <div id="home">
    <Promotion/>
    <Filter/>
    <ProductLists/>
  </div>
</main>

<style lang="scss">
  @import './Home.scss';
</style>
