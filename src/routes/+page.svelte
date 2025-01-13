<script lang="ts">
    import HeroTitle from '$lib/HeroTitle.svelte';
    import BackBreadcrum from '$lib/BackBreadcrum.svelte';

    let dept = "";
    let style = "";

    function handleClick() {
        window.location.href = 'search/' + dept + style;
    }
</script>

<svelte:head>
    <title>TKM Puller</title>
</svelte:head>

<HeroTitle title="TKM Puller" subtitle="Lookup item details from e-comm."/>
<section class="content">
    <div class="gweb-text-layout">
        <BackBreadcrum/>
        Please enter a department and style number in the boxes below to search.
        <br><br>
        <div class="field">
            <label class="label" for="department">Department</label>
            <div class="control">
              <input class="input is-primary" type="number" pattern="\d*" name="department" placeholder="22" bind:value={dept}>
            </div>
        </div>  
        <div class="field">
            <label class="label" for="style">Style</label>
            <div class="control">
              <input class="input is-primary" type="number" pattern="\d*" name="style" placeholder="051729" bind:value={style}>
            </div>
        </div>  
        <div class="control">
            <button class="button is-primary" on:click={handleClick}>Submit</button>
        </div>
    </div>
</section>
