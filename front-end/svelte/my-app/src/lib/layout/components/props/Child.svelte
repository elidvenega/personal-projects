<script>
  export let heading;
  export let paragraph;
  export let name;

</script>

<div>
  <h1>{heading}</h1>
  <p>{paragraph}</p>
  <p>This is about {name}</p>
</div>

<style>
  div {
    text-align: center;
    background-color: cadetblue;
    color: #fff;
    padding: 2rem;
    width: 40%;
    margin: auto;
  }
</style>
