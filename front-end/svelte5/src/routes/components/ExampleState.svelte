<script>
  let count = $state(0);
</script>

<div>
  <p>{count}</p>
  <button class="btn" onclick={() => count++}> increase </button>
  <button class="btn" onclick={() => count--}> decrease </button>
</div>

<style>
  div {
    /* margin: auto; */
    text-align: center;
  }

  p {
    font-size: 2rem;
  }
  .btn {
    /* margin: auto; */
    border: none;
    padding: 10px;
    text-align: center;
  }
</style>
