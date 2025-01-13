<script lang="ts">
    import HeroTitle from '$lib/HeroTitle.svelte';
    import BackBreadcrum from '$lib/BackBreadcrum.svelte';
    import type { PageData } from './$types'
    export const prerender = false

    export let data: PageData
</script>    

<svelte:head>
    <title>TKM Puller</title>
</svelte:head>

<HeroTitle title="TKM Puller" subtitle="Lookup item details from e-comm."/>
<section class="content">
    <div class="gweb-text-layout">
        <BackBreadcrum/>
        {#if data.error}
            <h2>No records found.</h2>
            <p>Sorry, no records could be found for this query.</p>
        {:else}
            <br>
            <p>ALL DATA IS VALID FROM MIDNIGHT LAST NIGHT UNLESS OUT OF STOCK, IN WHICH DATA IS NOT UPDATED.</p>
            <h2>{data.json.title}</h2>
            <ul>
                <li>Code: {data.json.pid}</li>
                <li>Brand: {data.json.brand}</li>
                <li>Price: {data.json.fmt_price}</li>
                <li>{data.json.mh_dept_name}</li>
                <li>{data.json.mh_class_name}</li>
                <li>Style Name: {data.json.style_name}</li>
            </ul>

            <h2>Item Photo</h2>
            <img src="{data.json.thumb_image}"/>
            {@html data.json.description}

            <h2>Extra Data</h2>
            <ul>
                <li>Listed: </li>
                <li>Shy brand: {data.json.is_shy_brand}</li>
                <li>Stock level: {data.json.stock}</li>
                <li>Was price if clearance: {data.json.fmt_was_price}</li>
                <li>RRP if available: {data.json.fmt_rrp}</li>
            </ul>
        {/if}
    </div>
</section>
