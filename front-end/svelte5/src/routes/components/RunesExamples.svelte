<script>
  let count = $state(0);
</script>

<div>
  <p>{count}</p>
  <button class="btn" onclick={() => count++}> increase </button>
  <button class="btn" onclick={() => count--}> decrease </button>
  <button class="btn" onclick={() => count === count}> Reset </button>
</div>

<style>
  div {
    /* margin: auto; */
    text-align: center;
  }
  .btn {
    /* margin: auto; */
    border: none;
    padding: 1rem;
    text-align: center;
  }
</style>
