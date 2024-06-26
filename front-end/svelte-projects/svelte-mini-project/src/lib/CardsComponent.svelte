<script>
  import InfoCardComponent from "./InfoCardComponent.svelte";

  const react = {
    framework: `React`,
    creator: `Jordan Walke`,
    info: ` It lets you put components together, but it doesn't prescribe how to do routing and data fetching`,
    img: `https://static-00.iconduck.com/assets.00/react-icon-512x512-u6e60ayf.png`,
    alt: `Is horrible`,
  };
  const svelte = {
    framework: `Svelte`,
    creator: `Rich Harris`,
    info: `Svelte converts your app into ideal JavaScript at build time, rather than interpreting your application code at run time`,
    img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRLXF8VSI5tMlBTfy-9UDvnO6OGMOvgGFz5g&s`,
    alt: `svelte`,
  };
  const vue = {
    framework: `Vue`,
    creator: `Evan You`,
    info: `Simplicity and learning curve: Vue. js is easy to learn and use, with only HTML, CSS, and JavaScript basics required. `,
    img: `https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png`,
    alt: `vue`,
  };
  const solid = {
    framework: `Solid`,
    creator: `Ryan Carniato`,
    info: `SolidJS uses a fine-grained reactivity system that efficiently tracks changes in data, resulting in a faster and smoother user experience compared to some other front-end frameworks.`,
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
    text-align: center;
    gap: 1.2rem;

  }
</style>
