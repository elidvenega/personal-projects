<script>
  let { name, age } = $props();
  const hobbies = ["Reading", "Gaming", "Cooking", "Hiking", "Music"];
</script>

<p>My name is {name} and age is {age} and this is what I like to do.</p>

<ul>
  {#each hobbies as hobby}
    <li>{hobby} and the index</li>
  {/each}
</ul>
