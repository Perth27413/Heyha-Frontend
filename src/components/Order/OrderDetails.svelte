<script lang="ts">
  import { onMount } from "svelte"
  import OrderResponseModel from "../../model/order/OrderResponseModel"
  import { get } from "../../store/api"

  export let params = {}

  let orderId: number = params['orderId']
  let orderDetails: OrderResponseModel = new OrderResponseModel

  onMount(async() => {
    getOrderDetails()
  })

  async function getOrderDetails(): Promise<void> {
    try {
      const response: OrderResponseModel = await get(`/orderById?orderId=${orderId}`)
      orderDetails = response
    } catch (error) {
      console.error(error)
    }
  }
</script>

<main id="orderDetailsMain">
  <div id="detailsBox">
    <div id="headerText">หมายเลขคำสั่งซื้อ #{orderDetails.id}</div>
    <div id="statusBox">
      <div id="statusKeyText">สถานะ :</div>
      <div id="statusValueText">กำลังจัดส่ง</div>
    </div>
    <div id="imageBox">
      <img id="imageMoto" class={`${orderDetails.statusId.id === 1 ? 'waiting' : ''}`} src={`/images/${orderDetails.statusId.id === 1 ? 'moto' : 'finish'}.gif`} alt="">
    </div>
  </div>
</main>

<style lang="scss">
  @import './OrderDetails.scss'
</style>