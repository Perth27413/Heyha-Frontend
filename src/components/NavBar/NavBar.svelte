<script lang="ts">
  import { navigate } from "svelte-routing"
  import { isLogin, getIsLogin, setLogout } from '../../store/user'
  import { onMount } from 'svelte';
import { alertSuccess } from '../../store/notify';

  let loginChecked: boolean = getIsLogin()

  onMount(() => {
    isLogin.subscribe(results => loginChecked = results)
  })

  let isShowLogout: boolean = false

  function showLogout() {
    isShowLogout = !isShowLogout
  }

  async function logout(): Promise<void> {
    setLogout()
    await alertSuccess('ออกจากระบบสำเร็จ')
    navigate('/')
  }
</script>

<main>
  <div id="navBar">
    <div id="navBox">
      <div id="logoBox">
        <div id="logo" on:click={() => navigate('/')}>
          <i class="fas fa-square" aria-hidden="true"></i>
        </div>
        <div id="logoText" on:click={() => navigate('/')}>
          เฮฮาหมูกระทะ
        </div>
      </div>
      {#if !loginChecked}
        <div id="loginRegisBox">
          <button class="login-regis-btn" on:click={() => navigate('/register')}>สมัครสมาชิก</button>
          <button class="login-regis-btn" on:click={() => navigate('/login')}>เข้าสู่ระบบ</button>
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
          <div id="cartBtn" on:click={() => navigate('/user/1/order')}>
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
          <div id="userDetails" on:click={() => showLogout()}>
            <div id="userText">
              PERTH
            </div>
            <div id="userIcon">
              <i class="fas fa-user" aria-hidden="true"></i>
            </div>
          </div>
          {#if isShowLogout}
          <div id="logOut" on:click={logout}>
            <label for="" id="logoutText">ออกจากระบบ</label>
          </div>
          {/if}
        </div>
      {/if}
    </div>
  </div>
</main>

<style lang="scss">
 @import './NavBar.scss';
</style>