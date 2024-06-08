<!-- <script>
  let count = $state(0);
  let doubled = $derived(count * 2);
</script>

<button onclick={() => count++}>
  {doubled}
</button>

<p>{count} doubled is {doubled}</p> -->

<script>
	let numbers = $state([1, 2, 3]);
	let total = $derived.by(() => {
		let total = 0;
		for (const n of numbers) {
			total += n;
		}
		return total;
	});
</script>

<button on:click={() => numbers.push(numbers.length + 1)}>
	{numbers.join(' + ')} = {total}
</button>