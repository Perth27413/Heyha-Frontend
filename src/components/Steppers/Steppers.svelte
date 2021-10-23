<script lang="ts">
  export let onCalculate
  $:onCalculate(count)
  let count: number = 1
  function increaseCount() {
    count = count + 1
  }
  function decreaseCount() {
    count = count - 1
    if(count === 0) {
      count = 1
    }
  }
</script>

<main id="steppersMain">
  <div id="steppersBox">
    <div id="left" on:click={() => decreaseCount()}>-</div>
    <div id="center">{count}</div>
    <div id="right" on:click={() => increaseCount()}>+</div>
  </div>
</main>

<style lang="scss">
  @import './Steppers.scss'
</style>