<script lang="ts">
  export let params = {}
  let orderId: number = params['orderId']
</script>

<main id="orderDetailsMain">
  <div id="detailsBox">
    <div id="headerText">หมายเลขคำสั่งซื้อ #99</div>
    <div id="statusBox">
      <div id="statusKeyText">สถานะ :</div>
      <div id="statusValueText">กำลังจัดส่ง</div>
    </div>
    <div id="imageBox">
      <img id="imageMoto" src="/images/moto.gif" alt="">
    </div>
  </div>
</main>

<style lang="scss">
  @import './OrderDetails.scss'
</style>