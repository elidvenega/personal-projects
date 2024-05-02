<script>
  let count = $state(0);
  let doubled = $derived(count * 2);
</script>

<button onclick={() => count++}>
  {doubled}
</button>

<p>{count} doubled is {doubled}</p>
