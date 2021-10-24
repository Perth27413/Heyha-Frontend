<script lang="ts">
  import { afterUpdate, onMount } from 'svelte'
  import { navigate } from "svelte-routing"
  import Select from 'svelte-select'
  import CartModel from '../../model/cart/CartModel';
  import CartRequestModel from '../../model/cart/CartRequestModel';
  import { get, post } from '../../store/api';
  import { getUserDetails } from '../../store/user';
  import Loading from '../Loading/Loading.svelte'
  import Steppers from '../Steppers/Steppers.svelte'

  export let isLogin
  

  let isLoading: boolean = false
  let totalPrice: number = 0
  let cartProducts: Array<CartModel> = []

  onMount(async() => {
    await getCartProduct()
  })

  afterUpdate(() => {
    checkIsLogin()
  })

  async function getCartProduct(): Promise<void> {
    try {
      isLoading = true
      const response: Array<CartModel> = await get(`/cartById?id=${getUserDetails().id}`)
      setTimeout(() => {
        isLoading = false
        cartProducts = response
        calculateTotalPrice()
      }, 300)
    } catch (error) {
      console.error(error)
      cartProducts = []
    }
  }

  async function updateCartProduct(productId: number, quantity: number): Promise<void> {
    try {
      const request: CartRequestModel = {
        userId: getUserDetails().id,
        productId: productId,
        productQuantity: quantity
      }
      await post('/cart', request)
      await getCartProduct()
    } catch (error) {
      console.error(error)
    }
  }

  function checkIsLogin(): void {
    if (!isLogin) {
      navigate('/')
    }
  }

  function onConfirmClick(): void {
    navigate('/user/1/confirm')
  }

  function calculateTotalPrice(): void {
    totalPrice = 0
    cartProducts.forEach(item => {
      totalPrice += (item.product.price * item.productQuantity)
    })
  }

</script>

<main id="cartMain">
  {#if isLoading}<Loading/>{/if}
  <div id="cartBox">
    {#if !cartProducts.length}
      <div id="noDataBox">ไม่มีรายการสินค้าในตะกร้า</div>
    {:else}
      <div id="productBox">
        {#each cartProducts as item}
          <div class="product-order-item">
            <img class="product-image" src={item.product.imageUrl} alt="">
            <div class="product-name">{item.product.name}</div>
            <div class="product-count-box">
              <Steppers onCalculate={count => updateCartProduct(item.product.id, count)} count={item.productQuantity} getTotalCount={(item) => undefined}/>
            </div>
            <div class="each-product-price-box">{`ราคาต่อชิ้น : ${item.product.price} บาท`}</div>
            <div class="total-product-price-box">{`ราคารวม : ${item.product.price * item.productQuantity} บาท`}</div>
            <hr class="line">
            <div class="button-delete-box">
              <button class="delete-button"><i class="fas fa-trash" aria-hidden="true"></i> ลบรายการสินค้า</button>
            </div>
          </div>
        {/each}
      </div>
    {/if}
    <div id="billBox">
      <div id="bill">
        <label for="" id="billHeaderText">รายการสินค้า</label>
        <hr class="line">
        <div id="productListBox">
          {#each cartProducts as item}
            <div class="list-item-box">
              <div class="item-details">{`${item.product.name} x${item.productQuantity}`}</div>
              <div class="item-prices">{`${item.product.price * item.productQuantity} บาท`}</div>
            </div>
          {/each}
        </div>
        <hr class="line">
        <div id="totalPriceBox">
          <div id="totalText">ราคารวมทั้งหมด</div>
          <div id="totalPriceText">{`${totalPrice} บาท`}</div>
        </div>
        <div id="paymentBox">
          <div id="paymentText">การชำระเงิน</div>
          <div id="paymentSelectBox">
            <Select
              id="paymentSelect"
              isSearchable={false}
              showChevron={true}
              placeholder="ช่องทางการชำระเงิน"
            />
          </div>
        </div>
        <div id="confirmButtonBox">
          <button id="confirmButton" on:click={onConfirmClick}>ยืนยันคำสั่งซื้อ</button>
        </div>
      </div>
    </div>
  </div>
</main>

<style lang="scss">
  @import "./Carts.scss"
</style>