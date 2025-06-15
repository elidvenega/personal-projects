<script>
  let userPromise = fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res => {
      if (!res.ok) throw new Error('Network error');
      return res.json();
    });
</script>

<h2>User Profile</h2>

{#await userPromise}
  <p>Loading user...</p>
{:then user}
  <div>
    <p><strong>Name:</strong> {user.name}</p>
    <p><strong>Email:</strong> {user.email}</p>
    <p><strong>Website:</strong> {user.website}</p>
  </div>
{:catch error}
  <p style="color: red;">Error loading user: {error.message}</p>
{/await}
