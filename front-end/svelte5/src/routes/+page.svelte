<script>
  // import ExampleDerived from "./components/ExampleDerived.svelte";
  // import ExampleState from "./components/ExampleState.svelte";
  import ExampleProps from "./components/ExampleProps.svelte";

  const info = {
    name: "Jay",
    lastName: "Sanchez",
    hobby: "Paint",
  };
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <!-- <ExampleState /> -->
  <!-- <ExampleDerived /> -->
  <ExampleProps {...info} />
</section>

<style>
</style>
