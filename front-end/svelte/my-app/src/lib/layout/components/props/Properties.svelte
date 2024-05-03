<script>
  import Child from "./Child.svelte";

  const data = {
    heading: `Svelte`,
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
 Placeat, iusto blanditiis? Ab magnam magni nobis perspiciatis, sed eius maiores molestiae.`,
    name: `Jake Matt`,
  };
</script>

<section>
  <Child {...data} />
</section>

<style>
  section {
    padding: 2rem;
  }
</style>
