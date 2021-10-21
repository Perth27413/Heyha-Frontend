<script lang="ts">
  export let isFirst: boolean
  export let isLast: boolean
  export let totalPage: number
  export let currentPage: number
  export let onSelectPage

  let page: number = 1
  $: onSelectPage(page)

  function setPage(pageNumber: number) {
    page = pageNumber
  }

</script>

<main id="paginateMain">
  <div id="paginateButtonBox">
    <div class={`paginate-button ${isFirst ? 'disable' : ''}`} on:click={() => !isFirst ? setPage(1) : undefined}>{'<<'}</div>
    <div class={`paginate-button ${isFirst ? 'disable' : ''}`} on:click={() => !isFirst ? setPage(currentPage - 1) : undefined}>{'<'}</div>
    <div class={`paginate-button ${!isFirst && isLast && (currentPage - 2) > 0 ? '' : 'hidden' }`} on:click={() => setPage(currentPage - 2)}>{currentPage - 2}</div>
    <div class={`paginate-button ${currentPage - 1 > 0 ? '' : 'hidden' }`} on:click={() => setPage(currentPage - 1)}>{currentPage - 1}</div>
    <div class={`paginate-button active`}>{currentPage}</div>
    <div class={`paginate-button ${currentPage + 1 <= totalPage ? '' : 'hidden'}`} on:click={() => setPage(currentPage + 1)}>{currentPage + 1}</div>
    <div class={`paginate-button ${!isLast && isFirst && (currentPage + 2) <= totalPage ? '' : 'hidden'}`} on:click={() => setPage(currentPage + 2)}>{currentPage + 2}</div>
    <div class={`paginate-button ${isLast ? 'disable' : ''}`} on:click={() => !isLast ? setPage(currentPage + 1) : undefined}>{'>'}</div>
    <div class={`paginate-button ${isLast ? 'disable' : ''}`} on:click={() => !isLast ? setPage(totalPage) : undefined}>{'>>'}</div>
  </div>
</main>

<style lang="scss">
  @import './Paginate.scss'
</style>