<script lang="ts">
  import { getUserDetails } from '../../store/user';
</script>
  
<main id="confirmOrderMain">
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
        {#each Array(20) as _,i}
        <div id="textBox">
          <div class="text-order">
            <label for="">สันคอหมูสไลด์ x1</label>
          </div>
          <div class="text-order">
            <label for="">135 บาท</label>
          </div>
        </div>
        {/each}
      </div>
    </div>
    <div id="confirmOrderBottom">
      <div id="totalBox">
        <div id="textTotalBox">
          <label for="">ราคารวมทั้งหมด</label>
          <label for="">800 บาท</label>
        </div>
      </div>
      <div id="paymentMethod">
        <div id="textPaymentBox">
          <label for="">ช่องทางการชำระเงิน</label>
          <label for="">เก็บเงินปลายทาง</label>
        </div>
      </div>
      <button class="button-confirm">ยืนยันรายการอาหาร</button>
    </div>
  </div>
</main>
  
<style lang="scss">
  @import './ConfirmOrder.scss'
</style>