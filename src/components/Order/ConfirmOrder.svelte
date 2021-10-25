<script lang="ts">
  import { getUserDetails } from '../../store/user'
  import { navigate } from "svelte-routing"
  import CartModel from '../../model/cart/CartModel'
  import { get, post } from '../../store/api'
  import Loading from '../Loading/Loading.svelte'
  import { onMount } from 'svelte'
  import AddOrderRequest from '../../model/order/AddOrderRequest'

  let isLoading: boolean = false
  let cartProducts: Array<CartModel> = []
  let totalPrice: number = 0

  onMount(async() => {
    await getCartProduct() 
  })

  async function getCartProduct(loading: boolean = true): Promise<void> {
    try {
      if (loading) isLoading = true
      const response: Array<CartModel> = await get(`/cartById?id=${getUserDetails().id}`) 
      setTimeout(() => {
        isLoading = false
        cartProducts = response
        console.log(cartProducts);    
        calculateTotalPrice()
      }, 300)
    } catch (error) {
      console.error(error)
      cartProducts = []
    }
  }

  function calculateTotalPrice(): void {
    totalPrice = 0
    cartProducts.forEach(item => {
      totalPrice += (item.product.price * item.productQuantity)
    })
  }

  async function addOrder(): Promise<void> {
    try {
      const request: AddOrderRequest = {
        userId: getUserDetails().id,
        paymentId: 1,
        total: totalPrice
      }
      await post('/order', request)
      navigate(`/user/${getUserDetails().id}/order/1`)
    } catch (error) {
      console.error(error);  
    }
  }

</script>
  
<main id="confirmOrderMain">
  {#if isLoading}<Loading/>{/if}
  <div id="confirmOrderBox">
    <div id="confirmOrderHeader">
      <label id="textHeader" for="">ยืนยันรายการสินค้า</label>
      <label id="textOrderId" for="">#31</label>
      <div id="badge">
        <label class="status" for="">รอการยืนยัน</label>
      </div>
    </div>
    <div id="line"></div>
    <div id="confirmOrderDetail">
      <div id="iconBox">
        <div id="icon">
          <i class="fas fa-address-book"></i>
        </div>
        <div id="addressHeader">
          <label for="">ที่อยู่สำหรับจัดส่ง</label>
        </div>
      </div>
      <div id="addressBox">
        <div class="text-label">
          <label for="">{`${getUserDetails().firstname} ${getUserDetails().lastname}`}</label>
        </div>
        <div class="text-label">
          <label for="">{getUserDetails().phone}</label>
        </div>
        <div class="text-label">
          <label for="">{getUserDetails().address}</label>
        </div>
      </div>
      <div id="orderLists">
        {#each cartProducts as items }
        <div id="textBox">
          <div class="text-order">
            <label for="">{`${items.product.name} x${items.productQuantity}`}</label>
          </div>
          <div class="text-order">
            <label for="">{`${items.product.price * items.productQuantity} บาท`}</label>
          </div>
        </div>
        {/each}
      </div>
    </div>
    <div id="confirmOrderBottom">
      <div id="totalBox">
        <div id="textTotalBox">
          <label for="">ราคารวมทั้งหมด</label>
          <label for="">{`${totalPrice} บาท`}</label>
        </div>
      </div>
      <div id="paymentMethod">
        <div id="textPaymentBox">
          <label for="">ช่องทางการชำระเงิน</label>
          <label for="">เก็บเงินปลายทาง</label>
        </div>
      </div>
      <button class="button-confirm" on:click={() => addOrder()}>ยืนยันรายการอาหาร</button>
    </div>
  </div>
</main>
  
<style lang="scss">
  @import './ConfirmOrder.scss'
</style>