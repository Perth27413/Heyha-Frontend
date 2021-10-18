<script lang="ts">
  import { onMount } from 'svelte';
  import Select from 'svelte-select';
  import OrderModel from '../../model/OrderModel';
  import SelectModel from '../../model/SelectModel';

  let orderLists: Array<OrderModel> = [{id: 1, name: 'วันที่เพิ่มล่าสุด'}, {id: 2, name: 'ราคาต่ำสุด'}]
  let orderSelectLists: Array<SelectModel> = []
  
  onMount(async ()=> {
    convertOrderListsToOrderSelectLists()
  })

  function convertOrderListsToOrderSelectLists(): Array<SelectModel> {
    
    orderLists.forEach((item: OrderModel) => {
      let orderSelect: SelectModel = {value: item.id, label: item.name}
      orderSelectLists.push(orderSelect)
    })
    return orderSelectLists
  }
</script>

<main id="productListsMain">
  <div id="productLists">
    <div id="controlBar">
      <div id="orderText">
        การเรียงลำดับสินค้า :
      </div>
      <div id="orderBox">
        <Select id="filterSelect" placeholder="วันที่เพิ่มล่าสุด"
          isClearable={false} 
          items={convertOrderListsToOrderSelectLists()}
          value={orderSelectLists[0]}
          isSearchable={false}
          showChevron={true}
        />
      </div>
    </div>
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
