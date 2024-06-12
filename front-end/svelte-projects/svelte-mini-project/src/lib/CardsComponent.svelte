<script>
  import InfoCardComponent from "./InfoCardComponent.svelte";

  const react = {
    framework: `React`,
    creator: `Jordan Walke`,
    info: ` Founded React in 2011.`,
    img: `https://static-00.iconduck.com/assets.00/react-icon-512x512-u6e60ayf.png`,
    alt: `Is horrible`,
  };
  const svelte = {
    framework: `Svelte`,
    creator: `Rich Harris`,
    info: `Is Great`,
    img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRLXF8VSI5tMlBTfy-9UDvnO6OGMOvgGFz5g&s`,
    alt: `svelte`,
  };
  const vue = {
    framework: `Vue`,
    creator: `Facebook`,
    info: `Is awesome`,
    img: `https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png`,
    alt: `vue`,
  };
  const solid = {
    framework: `Solid`,
    creator: ``,
    info: `Is awesome`,
    img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvnh5Q_6Aa9vaXXbRM3lhsAuKPPS0Ph8QLYg&s`,
    alt: `solid`,
  };
</script>

<div class="container">
  <InfoCardComponent {...react} />
  <InfoCardComponent {...svelte} />
  <InfoCardComponent {...vue} />
  <InfoCardComponent {...solid} />
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
</style>
