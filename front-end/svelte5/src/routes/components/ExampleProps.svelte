<script>
  let { name, lastName, hobby } = $props();
</script>

<section>
  <p>Hello I'm {name} {lastName} and I like to {hobby}</p>
</section>

<style>
  section {
    margin: auto;
    text-align: center;
    font-size: 2rem;
  }
</style>
