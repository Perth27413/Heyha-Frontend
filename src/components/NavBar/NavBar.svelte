<script lang="ts">
  import { navigate } from "svelte-routing";
  import {
    isLogin,
    getIsLogin,
    setLogout,
    getUserDetails,
    setCartProductLength,
    cartProductLength,
    getCartProductLength,
  } from "../../store/user";
  import { onMount } from "svelte";
  import { alertSuccess } from "../../store/notify";
  import CartModel from "../../model/cart/CartModel";
  import { get } from "../../store/api";

  let loginChecked: boolean = getIsLogin()
  let cartProducts: Array<CartModel> = []
  let totalProduct: number = 0

  onMount(async() => {
    isLogin.subscribe((results) => (loginChecked = results));
    await getCartProduct()
  })

  let isShowLogout: boolean = false;

  function showLogout() {
    isShowLogout = !isShowLogout;
  }

  async function logout(): Promise<void> {
    setLogout();
    await alertSuccess("ออกจากระบบสำเร็จ");
    navigate("/");
  }

  async function getCartProduct(): Promise<void> {
    try {
      const response: Array<CartModel> = await get(
        `/cartById?id=${getUserDetails().id}`
      );
      cartProducts = response;
      setCartProductLength(cartProducts.length)
    } catch (error) {
      console.error(error)
      cartProducts = []
    }
  }

  cartProductLength.subscribe(item => {
    totalProduct = item
  })
</script>

<main>
  <div id="navBar">
    <div id="navBox">
      <div id="logoBox">
        <div id="logo" on:click={() => navigate("/")}>
          <i class="fas fa-square" aria-hidden="true" />
        </div>
        <div id="logoText" on:click={() => navigate("/")}>เฮฮาหมูกระทะ</div>
      </div>
      {#if !loginChecked}
        <div id="loginRegisBox">
          <button class="login-regis-btn" on:click={() => navigate("/register")}
            >สมัครสมาชิก</button
          >
          <button class="login-regis-btn" on:click={() => navigate("/login")}
            >เข้าสู่ระบบ</button
          >
        </div>
      {:else}
        <div id="detailsBox">
          <div id="cartMobile" on:click={() => navigate(`/user/${getUserDetails().id}/cart`)}>
            <div id="cartMobileBox">
              <div id="cartMobileIcon">
                <i class="fas fa-shopping-cart" aria-hidden="true" />
              </div>
              <div id="cartMobileCount">{totalProduct ?? 0}</div>
            </div>
          </div>
          <div
            id="cartBtn"
            on:click={() => navigate(`/user/${getUserDetails().id}/cart`)}
          >
            <div id="cartBtnIcon">
              <i class="fas fa-shopping-cart" aria-hidden="true" />
            </div>
            <div id="cartBtnText">ตะกร้าสินค้า</div>
            <div id="cartBtnCount">
              <div id="countBox">
                <div id="countText">
                  {totalProduct ?? 0}
                </div>
              </div>
            </div>
          </div>
          <div id="userDetails" on:click={() => showLogout()}>
            <div id="userText">
              {getUserDetails().username}
            </div>
            <div id="userIcon">
              <i class="fas fa-user" aria-hidden="true" />
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
  @import "./NavBar.scss";
</style>
