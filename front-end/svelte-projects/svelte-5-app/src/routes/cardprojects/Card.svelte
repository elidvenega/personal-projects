<script lang="ts">
  import Info from "./Info.svelte";
  const frameworks = [
    {
      framework: `React`,
      creator: `Jordan Walke`,
      info: ` It lets you put components together, but it doesn't prescribe how to do routing and data fetching`,
      img: `https://static-00.iconduck.com/assets.00/react-icon-512x512-u6e60ayf.png`,
      alt: `Is horrible`,
    },
    {
      framework: `Svelte`,
      creator: `Rich Harris`,
      info: `Svelte converts your app into ideal JavaScript at build time, rather than interpreting your application code at run time`,
      img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRLXF8VSI5tMlBTfy-9UDvnO6OGMOvgGFz5g&s`,
      alt: `svelte`,
    },
    {
      framework: `Vue`,
      creator: `Evan You`,
      info: `Simplicity and learning curve: Vue. js is easy to learn and use, with only HTML, CSS, and JavaScript basics required. `,
      img: `https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png`,
      alt: `vue`,
    },
  ];
</script>

<div class="container">
  {#each frameworks as framework}
    <Info {...framework} />
  {/each}
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
    text-align: center;
    gap: 1.2rem;
  }
</style>
