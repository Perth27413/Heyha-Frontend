<script lang="ts">

</script>

<main id="productListsMain">
  <div id="productLists">
    {#each Array(15) as _, i}
      <div class="grid-item">
        <div class="product-tag">แนะนำ</div>
        <img class="product-image" src="https://img.wongnai.com/p/984x0/2019/05/26/3dc36fd7adf042bbadd4475f622964b1.jpg" alt="">
        <div class="product-name">สันคอหมูสไลด์</div>
        <div class="product-price-box">
          <div class="product-price">200 บาท</div>
        </div>
        <hr class="product-line">
        <div class="product-detail">
          <button class="product-detail-button">รายละเอียดสินค้า</button>
        </div>
      </div>  
    {/each} 
    
  </div>
</main>

<style lang="scss">
  @import './ProductLists.scss';
</style>
