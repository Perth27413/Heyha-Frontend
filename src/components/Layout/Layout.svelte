<script lang="ts">
  import NavBar from "../NavBar/NavBar.svelte";
  import Footer from "../Footer/Footer.svelte";
  import Login from "../Login/Login.svelte";
</script>

<main>
  <div id="layout">
    <div id="navBox">
      <NavBar/>
    </div>
    <div id="bodyBox">
      <Login/>
    </div>
    <div id="footerBox">
      <Footer/>
    </div>
  </div>
</main>

<style lang="scss">
  @import './Layout.scss';
</style>
