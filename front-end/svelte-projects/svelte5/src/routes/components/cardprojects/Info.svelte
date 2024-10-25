<script>
// @ts-nocheck

  let { framework, info, creator, img, alt } = $props();
</script>

<div>
  <h1>{framework}</h1>
  <img src={img} {alt} />
  <h2>Creator: {creator}</h2>
  <p>{info}</p>
</div>

<style>
  div {
    max-width: 100%;
    padding: 2rem;
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
