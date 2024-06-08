<script>
  let greet = "Hello Svelte and Thanks";

  const randomWords = ["Ok", "great", "allright", "today"];
</script>

<div class="container">
  <h1>{greet}</h1>
</div>
<div class="random-words">
  {#each randomWords as random}
    <p>{random}</p>
  {/each}
</div>

<style>
  .container h1 {
    text-align: center;
    text-transform: uppercase;
    margin-top: 2rem;
  }

  .random-words {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: center;
    font-size: 1.3rem;
  }
</style>
