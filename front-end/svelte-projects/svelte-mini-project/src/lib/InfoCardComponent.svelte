<script>
  export let framework;
  export let info;
  export let creator;
  export let img;
  export let alt;
</script>

<div>
  <h1>{framework}</h1>
  <img src={img} {alt} />
  <h2>Creator: {creator}</h2>
  <p>{info}</p>
</div>

<style>
  div {
    max-width: 42rem;
    padding: 3rem;
    background-color: #fff;
    color: black;
    margin-top: 2rem;
    border-radius: 2%;
  }
  h1 {
    font-size: 2.3rem;
  }

  img {
    max-width: 12rem;
    height: 40vh;
  }
</style>










