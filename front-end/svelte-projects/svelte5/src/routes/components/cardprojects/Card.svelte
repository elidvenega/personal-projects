<script lang="ts">
  import Info from "./Info.svelte";
  import React from "../../../lib/images/react.png";
  import SvelteImg from "../../../lib/images/svelte.png";
  import Vue from "../../../lib/images/vue.png";
  const frameworks = [
    {
      framework: `React`,
      creator: `Jordan Walke`,
      info: ` It lets you put components together, but it doesn't prescribe how to do routing and data fetching`,
      img: React,
      alt: `Is horrible`,
    },
    {
      framework: `Svelte`,
      creator: `Rich Harris`,
      info: `Svelte converts your app into ideal JavaScript at build time, rather than interpreting your application code at run time`,
      img: SvelteImg,
      alt: `svelte`,
    },
    {
      framework: `Vue`,
      creator: `Evan You`,
      info: `Simplicity and learning curve: Vue. js is easy to learn and use, with only HTML, CSS, and JavaScript basics required. `,
      img: Vue,
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
    margin: auto;
    text-align: center;
    gap: 20px;
    width: 100%;
  }
</style>
