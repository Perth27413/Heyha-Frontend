<script lang="ts">
  import { afterUpdate } from 'svelte';
  import { navigate } from "svelte-routing"
  import Select from 'svelte-select'

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
    <div class="order-top">
      <div class="grid">
        <div class="input-checkbox">
          <input class="input-checkbox" type="checkbox">
        </div>
        <label for="" class="label-text">สินค้า</label>
        <div class="blank"></div>
        <label class="text" for="">ราคาต่อชิ้น</label>
        <label class="text" for="">จำนวน</label>
        <label class="text" for="">ราคารวม</label>
        <div class="blank"></div>
      </div>
    </div>
    <div class="list-orders">
      {#each orderList as order}
      <div class="menu-list">
        <div class="input-checkbox">
          <input class="input-checkbox" type="checkbox" checked={order.isActive}>
        </div>
        <div class="menu-image">
          <img class="menu-image" src={order.image} alt="">
        </div>
        <div class="text-label">
          <label for="">{order.name}</label>
        </div>
        <div class="text-label">
          <label for="">{order.amount}</label>
        </div>
        <div class="text-label">
          <label for="">รอเพิร์ททำ</label>
        </div>
        <div class="text-label">
          <label for="">{order.vat}</label>
        </div>
        <div class="icons">
          <i class="fas fa-trash"></i>
        </div>
      </div>
      {/each}
    </div>
    <div class="payment-main">
      <div class="payment-methods">
        <div class="payment-box">
          <label for="" id="paymentText">ช่องทางการชำระ :</label>
          <div class="select-method">
            <Select 
              id="paymentSelect"
              isClearable={false}
              isSearchable={false}
              showChevron={true}
            />
          </div>
        </div>
      </div>
    </div>
    <div class="order-bottom">
      <div class="order-bottom-box">
        <div class="input-checkbox">
          <input class="input-checkbox" type="checkbox">
        </div>
        <div class="all-item">
          <label for="">เลือกทั้งหมด(0)</label>
        </div>
        <div class="all-item">
          <label for="">ลบ</label>
        </div>
        <div class="all-item">
          <label for="">รวม 0 รายการ</label>
        </div>
        <div class="btn">
          <button class="button-buy">สั่งสินค้า</button>
        </div>
      </div>
    </div>
  </div>
</main>

<style lang="scss">
  @import "./Order.scss"
</style>