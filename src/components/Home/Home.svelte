<script lang="ts">
  import Filter from "./Filter.svelte";
  import ProductLists from "./ProductLists.svelte";
</script>

<main>
  <div id="home">
    <Filter/>
    <ProductLists/>
  </div>
</main>

<style lang="scss">
  @import './Home.scss';
</style>
