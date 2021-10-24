<script lang="ts">
  import { afterUpdate } from 'svelte';
  import { navigate } from "svelte-routing"
  import Select from 'svelte-select'
import Steppers from '../Steppers/Steppers.svelte';

  export let isLogin
  type order = {
    isActive: boolean
    image: string
    name: string
    amount: number
    total: string
    vat: number
  }
  let orderList: order [] = [
    {
      isActive: true,
      image: "https://img.wongnai.com/p/984x0/2019/05/26/3dc36fd7adf042bbadd4475f622964b1.jpg",
      name: 'หมูสันคอสไลด์',
      amount: 180,
      total: "รอ....",
      vat: 180
    },
    {
      isActive: true,
      image: "https://img.wongnai.com/p/984x0/2019/05/26/3dc36fd7adf042bbadd4475f622964b1.jpg",
      name: 'หมูสันคอสไลด์',
      amount: 200,
      total: "รอ....",
      vat: 200
    }
  ]

  afterUpdate(() => {
    checkIsLogin()
  })

  function checkIsLogin(): void {
    if (!isLogin) {
      navigate('/')
    }
  }
</script>

<main id="orderMain">
  <div id="orderBox">
    <div id="productBox">
      {#each Array(12) as _, i}
        <div class="product-order-item">
          <img class="product-image" src="https://img.wongnai.com/p/984x0/2019/05/26/3dc36fd7adf042bbadd4475f622964b1.jpg" alt="">
          <div class="product-name">สันคอหมูสไลด์</div>
          <div class="product-count-box">
            <Steppers onCalculate={count => console.log(count)}/>
          </div>
          <div class="each-product-price-box">ราคาต่อชิ้น : 150 บาท</div>
          <div class="total-product-price-box">ราคารวม : 500 บาท</div>
          <hr class="line">
          <div class="button-delete-box">
            <button class="delete-button">ลบรายการสินค้า</button>
          </div>
        </div>
      {/each}
    </div>
    <div id="billBox">
      <div id="bill">
        <label for="" id="billHeaderText">รายการสินค้า</label>
        <hr class="line">
        <div id="productListBox">
          {#each Array(20) as _, i}
            <div class="list-item-box">
              <div class="item-details">test x1</div>
              <div class="item-prices">99 บาท</div>
            </div>
          {/each}
        </div>
        <hr class="line">
        <div id="totalPriceBox">
          <div id="totalText">ราคารวมทั้งหมด</div>
          <div id="totalPriceText">9999 บาท</div>
        </div>
        <div id="paymentBox">
          <div id="paymentText">ช่องทางการชำระเงิน</div>
          <div id="paymentSelectBox">
            <Select
              id="paymentSelect"
              isSearchable={false}
              showChevron={true}
            />
          </div>
        </div>
        <div id="confirmButtonBox">
          <button id="confirmButton">ยืนยันคำสั่งซื้อ</button>
        </div>
      </div>
    </div>
  </div>
</main>

<style lang="scss">
  @import "./Order.scss"
</style>