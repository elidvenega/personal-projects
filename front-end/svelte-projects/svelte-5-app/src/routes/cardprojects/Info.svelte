<script lang="ts">
  interface Props {
    framework: string;
    info: string;
    creator: string;
    img: string;
    alt: string;
  }

  let { framework, info, creator, img, alt }: Props = $props();
</script>

<div class="card-container">
  <h1>{framework}</h1>
  <img src={img} {alt} />
  <h2>Creator: {creator}</h2>
  <p>{info}</p>
</div>

<style>
  .card-container {
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
