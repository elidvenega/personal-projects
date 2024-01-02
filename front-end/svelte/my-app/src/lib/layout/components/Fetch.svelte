<script>
  import { onMount } from "svelte";

  // @ts-ignore
  /**
   * @type {any[]}
   */
  let users = [];

  onMount(async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    users = await res.json();
  });
</script>

<div class="users">
  <h1>Users List</h1>
  {#each users as user}
    <ul>
      <li>{user.id} - {user.name}</li>
      <li>{user.email}</li>
    </ul>
  {:else}
    <!-- this block renders when users.length === 0 -->
    <p>loading...</p>
  {/each}
</div>

<style>
  .users {
    text-align: center;
  }
</style>
