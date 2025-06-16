<script>
  let size = $state(50);
  let color = $state("#ff3e00");

  let canvas;

  $effect(() => {
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    // this will re-run whenever `color` or `size` change
    context.fillStyle = color;
    context.fillRect(0, 0, size, size);
  });
</script>

<canvas bind:this={canvas} width="100" height="100"></canvas>

<div class="controls">
  <label>
    <input type="range" bind:value={size} /> size
  </label>

  <label>
    <input type="color" bind:value={color} /> color
  </label>
</div>

<style>
  .controls {
    border-top: 1px solid #ccc;
    padding: 1em 0;
    margin: 1em 0;
    display: flex;
    gap: 1em;
  }

  label {
    display: flex;
    align-items: center;
    gap: 0.5em;
  }
</style>
