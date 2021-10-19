<script lang="ts">
  import { push } from 'svelte-spa-router'
  let isLogin: boolean = false
</script>

<main>
  <div id="navBar">
    <div id="navBox">
      <div id="logoBox">
        <div id="logo" on:click={() => push('/')}>
          <i class="fas fa-square" aria-hidden="true"></i>
        </div>
        <div id="logoText" on:click={() => push('/')}>
          เฮฮาหมูกระทะ
        </div>
      </div>
      {#if !isLogin}
        <div id="loginRegisBox">
          <button class="login-regis-btn">สมัครสมาชิก</button>
          <button class="login-regis-btn" on:click={() => push('/login')}>เข้าสู่ระบบ</button>
        </div>
      {:else}
        <div id="detailsBox">
          <div id="cartMobile">
            <div id="cartMobileBox">
            <div id="cartMobileIcon">
              <i class="fas fa-shopping-cart" aria-hidden="true"></i>
            </div>
              <div id="cartMobileCount">
                1
              </div>
            </div>
          </div>
          <div id="cartBtn">
            <div id="cartBtnIcon">
              <i class="fas fa-shopping-cart" aria-hidden="true"></i>
            </div>
            <div id="cartBtnText">
              ตะกร้าสินค้า
            </div>
            <div id="cartBtnCount">
              <div id="countBox">
                <div id="countText">
                  1
                </div>
              </div>
            </div>
          </div>
          <div id="userDetails">
            <div id="userText">
              PERTH
            </div>
            <div id="userIcon">
              <i class="fas fa-user" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      {/if}
    </div>
  </div>
</main>

<style lang="scss">
 @import './NavBar.scss';
</style>