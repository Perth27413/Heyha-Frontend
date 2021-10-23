<script lang="ts">
  import CategoryModel from "../../model/category/CategoryModel"

  export let onSelectCategory
  $: onSelectCategory(category)
  
  let category: number = 1
  const categoryMenuLists: Array<CategoryModel> = [
    {id: 1, name: 'ทั้งหมด'},
    {id: 2, name: 'ชุดเซ็ต'},
    {id: 3, name: 'เนื้อหมู'},
    {id: 4, name: 'เนื้อวัว'},
    {id: 5, name: 'ทะเล'},
    {id: 6, name: 'เส้น'},
    {id: 7, name: 'ผัก'},
    {id: 8, name: 'อาหารทานเล่น'},
  ]

  function onClick(categoryId: number): void {
    category = categoryId
  }

</script>

<main id="filterMain">
  <div id="filterBox">
    <div id="filterBtnBox">
      <div id="filterBtnBoxScroll">
        {#each categoryMenuLists as item}
          <div class={`filter-button ${category === item.id ? 'active' : ''}`} on:click={() => onClick(item.id)}>{item.name}</div>
        {/each}
      </div>
    </div>
  </div>
</main>

<style lang="scss">
 @import './Filter.scss'
</style>