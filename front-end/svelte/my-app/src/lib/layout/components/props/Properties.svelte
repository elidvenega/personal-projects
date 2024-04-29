<script>
  import Child from "./Child.svelte";

  const data = {
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
 Placeat, iusto blanditiis? Ab magnam magni nobis perspiciatis, sed eius maiores molestiae.`,
  };
</script>

<Child paragraph={data.text} />

