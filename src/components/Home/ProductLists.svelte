<script lang="ts">
  import { onMount } from 'svelte'
  import { navigate } from "svelte-routing"
  import Select from 'svelte-select'
  import OrderModel from '../../model/OrderModel'
  import ProductsRequestModel from '../../model/product/ProductRequestModel'
  import ProductsResponseModel from '../../model/product/ProductsResponseModel'
  import SelectModel from '../../model/SelectModel'
  import { post } from '../../store/api';
  import Loading from '../Loading/Loading.svelte'
  import Paginate from '../Paginate/Paginate.svelte'
  import Filter from './Filter.svelte'

  let productLists: ProductsResponseModel = new ProductsResponseModel
  let orderLists: Array<OrderModel> = [{id: 1, name: 'วันที่เพิ่มล่าสุด'}, {id: 2, name: 'ราคาต่ำสุด'}, {id: 3, name: 'ราคาสูงสุด'}]
  let orderSelectLists: Array<SelectModel> = []
  let page: number = 1
  let categoryId: number = 1
  let orderBy: string = 'ASC'
  let sortBy: string = 'create_date'
  let productRequest: ProductsRequestModel = {
        elementPerPage: 15,
        page: 1,
        categoryId: 1,
        sortBy: '',
        orderBy: 'ASC'
  }
  let isLoading: boolean = false

  onMount(async() => {
    getProductLists(1)
  })

  function convertOrderListsToOrderSelectLists(): Array<SelectModel> {
    orderLists.forEach((item: OrderModel) => {
      let orderSelect: SelectModel = {value: item.id, label: item.name}
      orderSelectLists.push(orderSelect)
    })
    return orderSelectLists
  }

  async function getProductLists(pageNumber: number): Promise<void> {
    try {
      isLoading = true
      productRequest.page = pageNumber
      productRequest.orderBy = orderBy
      productRequest.sortBy = sortBy
      productRequest.categoryId = categoryId
      const response: ProductsResponseModel = await post('/products', productRequest)
      setDataToProductLists(response)
    } catch (error) {
      console.error(error)
    }
  }

  function setDataToProductLists(response: ProductsResponseModel): void {
    setTimeout(() => {
      productLists = new ProductsResponseModel
    }, 100)
    setTimeout(() => {
      isLoading = false
      productLists = response
    }, 200)
  }

  async function handleSelect(event): Promise<void> {
    setSortBy(event.detail.value)
    await getProductLists(1)
  }

  async function onFilterSelectHandle(id: number): Promise<void> {
    categoryId = id
    await getProductLists(1)
  }

  function setSortBy(orderId: number): void {
    switch (orderId) {
      case 1:
        sortBy = 'create_date'
        orderBy = 'ASC'
        break
      case 2:
        sortBy = 'price'
        orderBy = 'ASC'
        break
      case 3:
        sortBy = 'price'
        orderBy = 'DESC'
        break
      default:
        break
    }
  }
</script>

<main id="productListsMain">
  <div id="filterBox"><Filter onSelectCategory={categoryId => onFilterSelectHandle(categoryId)}/></div>
  <div id="productLists">
    <div id="controlBar">
      <div id="orderText">
        การเรียงลำดับสินค้า :
      </div>
      <div id="orderBox">
        <Select id="filterSelect"
          isClearable={false} 
          items={convertOrderListsToOrderSelectLists()}
          value={orderSelectLists[0]}
          isSearchable={false}
          showChevron={true}
          on:select={handleSelect}
        />
      </div>
    </div>
    {#if isLoading}<Loading/>{/if}
    {#each productLists.products as product}
      <div class="grid-item">
        {#if product.recommend}
          <div class="product-tag">แนะนำ</div>
        {/if}
        <img class="product-image" src={product.imageUrl} alt="">
        <div class="product-name">{product.name}</div>
        <div class="product-price-box">
          <div class="product-price">{product.price} บาท</div>
        </div>
        <hr class="product-line">
        <div class="product-detail">
          <button class="product-detail-button" on:click={() => navigate(`/product/${product.id}`)}>รายละเอียดสินค้า</button>
        </div>
      </div>  
    {/each} 
  </div>
  <Paginate isFirst={productLists.isFirst} isLast={productLists.isLast} totalPage={productLists.totalPage} currentPage={productLists.page} onSelectPage={value => getProductLists(value)}/>
</main>

<style lang="scss">
  @import './ProductLists.scss';
</style>
