<script>
    async function fetchUserData() {
        const response = await fetch('/api/users/1');
        const user = await response.json();
        return user;
    }

    const userDataPromise = fetchUserData();
</script>

{#await userDataPromise}
    <p>Loading user data...</p>
{:then user}
    <h2>User: {user.name}</h2>
    <p>Email: {user.email}</p>
{:catch error}
    <p style="color: red;">Error loading user: {error.message}</p>
{/await}