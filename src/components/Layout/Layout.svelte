<script lang="ts">
  import NavBar from "../NavBar/NavBar.svelte"
  import Footer from "../Footer/Footer.svelte"

  export let Component
  export let params

</script>

<main>
  <div id="layout">
    <div id="navBox">
      <NavBar/>
    </div>
    <div id="bodyBox">
      <svelte:component this={Component} params={params}/>
    </div>
    <div id="footerBox">
      <Footer/>
    </div>
  </div>
</main>

<style lang="scss">
  @import './Layout.scss';
</style>
