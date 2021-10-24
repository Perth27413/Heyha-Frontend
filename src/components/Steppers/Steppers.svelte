<script lang="ts">
  export let onCalculate
  $:onCalculate(count)
  let count: number = 1
  function increaseCount() {
    if (count + 1 !== 99) {
      count = count + 1
    }
  }
  function decreaseCount() {
    if(count - 1 !== 0) {
      count = count - 1
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