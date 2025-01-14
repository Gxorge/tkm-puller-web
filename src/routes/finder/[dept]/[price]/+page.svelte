<script lang="ts">
    import HeroTitle from '$lib/HeroTitle.svelte';
    import BackBreadcrum from '$lib/BackBreadcrum.svelte';
    import type { PageData } from './$types'
    export const prerender = false

    export let data: PageData
</script>

<svelte:head>
    <title>Code Finder | TKM Puller</title>
</svelte:head>

<HeroTitle title="Code Finder" subtitle="Find a code from a department and price"/>
<section class="content">
    <div class="gweb-text-layout">
        <BackBreadcrum/>
        {#if data.error}
            <h2>No records found</h2>
            <p>Sorry, no records could be found for this query.</p>
        {:else}
            <h2>Code Found</h2>
            <p>Please use the following code: <b>{data.code}</b></p>
        {/if}
    </div>
</section>
