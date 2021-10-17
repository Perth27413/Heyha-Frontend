<script lang="ts">
  import NavBar from "../NavBar/NavBar.svelte";
  import Home from "../Home/Home.svelte";
  import Footer from "../Footer/Footer.svelte";
</script>

<main>
  <div id="layout">
    <div id="navBox">
      <NavBar/>
    </div>
    <div id="bodyBox">
      <Home/>
    </div>
    <div id="footerBox">
      <Footer/>
    </div>
  </div>
</main>

<style lang="scss">
  @import './Layout.scss';
</style>
