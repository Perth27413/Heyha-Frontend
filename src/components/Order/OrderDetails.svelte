<script lang="ts">
  import { onMount } from "svelte"
  import OrderResponseModel from "../../model/order/OrderResponseModel"
  import { get } from "../../store/api"
  import Loading from "../Loading/Loading.svelte"

  export let params = {}

  let orderId: number = params['orderId']
  let orderDetails: OrderResponseModel = new OrderResponseModel
  let isLoading: boolean = false

  onMount(async() => {
    getOrderDetails()
  })

  async function getOrderDetails(): Promise<void> {
    try {
      isLoading = true
      const response: OrderResponseModel = await get(`/orderById?orderId=${orderId}`)
      orderDetails = response
      setTimeout(() => {
        isLoading = false
      }, 300)
    } catch (error) {
      console.error(error)
    }
  }

  function getImageFromStatus(statusId: number): string {
    switch (statusId) {
      case 1:
        return 'wait'
      case 2:
        return 'moto'
      case 3:
        return 'finish'
      default:
        break;
    }
  }

  function mapStatusBoxColor(statusId: number): string {
    switch (statusId) {
      case 1:
        return 'wait'
      case 2:
        return 'deliver'
      case 3:
        return 'finish'
      default:
        break;
    }
  }
</script>

<main id="orderDetailsMain">
  {#if isLoading}<Loading/>{/if}
  <div id="detailsBox">
    <div id="headerText">หมายเลขคำสั่งซื้อ #{orderDetails.id}</div>
    <div id="statusBox" class="{`${mapStatusBoxColor(orderDetails.statusId.id)}`}">
      <div id="statusKeyText">สถานะ :</div>
      <div id="statusValueText">{orderDetails.statusId.name}</div>
    </div>
    <div id="imageBox">
      <img id="imageMoto" class={`${orderDetails.statusId.id === 2 ? 'deliver' : ''}`} src={`/images/${getImageFromStatus(orderDetails.statusId.id)}.gif`} alt="">
    </div>
  </div>
</main>

<style lang="scss">
  @import './OrderDetails.scss'
</style>