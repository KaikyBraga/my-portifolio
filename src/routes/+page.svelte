<script>
import { onMount } from "svelte";

let githubData = null;
let loading = true;
let error = null;


onMount(async () => {
    try {
        const response = await fetch("https://api.github.com/users/YOUR_USERNAME");
        githubData = await response.json();
    } catch (err) {
        error = err;
    }
    loading = false;
});

</script>

{#if loading}
    <p>Loading...</p>
{:else if error}
    <p class="error">Something went wrong: {error.message}</p>
{:else}
    <section>
        <h2>My GitHub Stats</h2>
        <dl>
            <dt>Followers</dt>
            <dd>{githubData.followers}</dd>
            <dt>Following</dt>
            <dd>{githubData.following}</dd>
            <dt>Public Repositories</dt>
            <dd>{githubData.public_repos}</dd>
        </dl>
    </section>
{/if}
