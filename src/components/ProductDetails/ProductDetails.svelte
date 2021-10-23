<script lang="ts">
  import  ProductModel  from "../../model/product/ProductModel"
  import { get } from "../../store/api";
  import { onMount } from 'svelte'
  import Steppers from "../Steppers/Steppers.svelte"
  export let params = {}
  let values = Object.values(params).toString()
  let keys = Object.keys(params).toString()
  let product: ProductModel = new ProductModel
  let count: number = 1

  onMount(async() => {
    getProductById() 
  })

  async function getProductById(): Promise<void> {
    try {
      const response: ProductModel = await get(`/product?${keys}=${values}`)
      product = response 
      console.log(product);
    } catch (error) {
      console.log(error);
    }
  }

  function calculatePrices(props, price) {     
    let count = props*price
    return count
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
            <Steppers onCalculate={count => console.log(calculatePrices(count, product.price))} />
          </div>
        </div>
        <div class="mid-row">
          <div class="product-total">
            <div class="total-text">{`฿${calculatePrices(count, product.price)}`}</div>
          </div>
        </div>
        <div class="add-order">
          <div class="button-buy-product">ซื้อสินค้า</div>
          <div class="button-cart">
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