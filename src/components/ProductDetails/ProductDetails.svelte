<script lang="ts">
  import  ProductModel  from "../../model/product/ProductModel"
  import { get, post } from "../../store/api"
  import { onMount } from 'svelte'
  import Steppers from "../Steppers/Steppers.svelte"
  import CartRequestModel from '../../model/cart/CartRequestModel' 
  import { getCartProductLength, getIsLogin, getUserDetails, setCartProductLength } from '../../store/user'
  import { navigate } from "svelte-routing"
  import { alertSuccess, alertWarning } from "../../store/notify"
  import CartModel from "../../model/cart/CartModel"

  export let params = {}
  let values = Object.values(params).toString()
  let keys = Object.keys(params).toString()
  let product: ProductModel = new ProductModel
  let quantity: number = 1
  let totalPrice: number = 0
  let cartProducts: Array<CartModel> = []

  onMount(async() => {
    getProductById() 
  })

  async function getProductById(): Promise<void> {
    try {
      const response: ProductModel = await get(`/product?${keys}=${values}`)
      product = response 
    } catch (error) {
      console.log(error)
    }
  }

  async function addToCarts(): Promise<void> {
    try {
      const request: CartRequestModel = {
        productId: product.id,
        userId: getUserDetails().id,
        productQuantity: quantity
      }
      await post('/cart', request)
    } catch (error) {
      console.error(error);  
    }
  }

  async function addToCartandAlert(): Promise<void> {
    if (getIsLogin()) {
    await addToCarts()
    await alertSuccess('สินค้าถูกเพิ่มในตระกร้าเรียบร้อยแล้ว')
    await getCartProduct()
    } else {
      await alertWarning('กรุณาเข้าสู่ระบบก่อนสั่งสินค้า')
    }
  }

  async function buyNow(): Promise<void> {
    if (getIsLogin()) {
    await addToCarts()
    navigate(`/user/${getUserDetails().id}/cart`)
    } else {
      await alertWarning('กรุณาเข้าสู่ระบบก่อนสั่งสินค้า')
    }
  }

  async function getCartProduct(): Promise<void> {
    try {
      const response: Array<CartModel> = await get(
        `/cartById?id=${getUserDetails().id}`
      )
      cartProducts = response;
      setCartProductLength(cartProducts.length)
    } catch (error) {
      console.error(error)
      cartProducts = []
    }
  }

</script>

<main id="productDetailMain">
  <div id="productDetailBox">
    <div class="product-picture">
      <img class="product-image" src={product.imageUrl} alt={product.name}>
    </div>
    <div class="product-detail">
      <div class="detail-top">
        <div class="product-title">{product.name}</div>
        {#if product.recommend}
        <div class="recommend-badge">แนะนำ</div>
        {/if}
      </div>
      <hr class="line"/>
      <div class="detail-mid">
        <div class="mid-row">
          <div class="product-weight">น้ำหนัก :</div>
          <div class="weight-badge">100 กรัม</div>
        </div>
        <div class="mid-row">
          <div class="product-amount">จำนวน :</div>
          <div class="amount">
            <Steppers onCalculate={() => undefined} count={quantity} getTotalCount={count => quantity = count} />
          </div>
        </div>
        <div class="mid-row">
          <div class="product-total">
            <div class="total-text">{`฿${quantity * product.price}`}</div>
          </div>
        </div>
        <div class="add-order">
          <div class="button-buy-product" on:click={() => buyNow()}>ซื้อสินค้า</div>
          <div class="button-cart" on:click={() => addToCartandAlert()}>
            <i class="fas fa-cart-plus"></i>
          </div>
        </div>
        <hr class="line bottom"/>
      </div>
      <div class="product-category">
        <div class="category-text">หมวดหมู่:</div>
        <div class="category-text">{product.category}</div>
      </div>
    </div>
  </div>
</main>

<style lang="scss">
  @import './ProductDetails.scss';
</style>