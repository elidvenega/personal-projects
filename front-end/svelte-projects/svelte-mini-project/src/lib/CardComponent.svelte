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
  <h2>{creator}</h2>
  <p>{info}</p>
</div>
