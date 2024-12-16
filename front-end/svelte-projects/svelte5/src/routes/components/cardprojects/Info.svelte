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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 12px;
    background-color: #fff;
    color: black;
    border-radius: 2%;
  }
  h1 {
    font-size: 3rem;
    font-weight: 900;
  }
  h2 {
    font-size: 2.3rem;
    padding: 1rem;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
</style>
