<script lang="ts">
  export let count: number = 1
  export let getTotalCount
  export let onCalculate
  

  function increaseCount() {
    if (count + 1 !== 99) {
      count = count + 1
      $:onCalculate(1)
      $:getTotalCount(count)
    }
  }

  function decreaseCount() {
    if(count - 1 !== 0) {
      count = count - 1
      $:onCalculate(-1)
      $:getTotalCount(count)
    }
  }
</script>

<main id="steppersMain">
  <div id="steppersBox">
    <div class={`left ${count <= 1 ? 'disable' : ''}`} on:click={() => decreaseCount()}>-</div>
    <div class="center">{count}</div>
    <div class={`right ${count === 99 ? 'disable' : ''}`} on:click={() => increaseCount()}>+</div>
  </div>
</main>

<style lang="scss">
  @import './Steppers.scss'
</style>