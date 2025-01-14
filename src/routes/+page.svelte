<script lang="ts">
    import HeroTitle from '$lib/HeroTitle.svelte';
    import BackBreadcrum from '$lib/BackBreadcrum.svelte';

    let il_dept = "";
    let il_style = "";

    let cf_dept = "";
    let cf_price = "";

    function handleSearchClick() {
        var dept: number = +il_dept;
        if (dept < 10) il_dept = "0" + il_dept;
        window.location.href = 'search/' + il_dept + il_style;
    }

    function handleFinderClick() {
        let newCfPrice = cf_price.toString().replace(/[^\w\s]|_/g, "");
        var dept: number = +cf_dept;
        if (dept < 10) cf_dept = "0" + cf_dept;
        window.location.href = 'finder/' + cf_dept + '/' + newCfPrice;
    }
</script>

<svelte:head>
    <title>TKM Puller</title>
</svelte:head>

<HeroTitle title="TKM Puller" subtitle="Find codes, review item details, and more"/>
<section class="content">
    <div class="gweb-text-layout">
        <BackBreadcrum/>
        Please choose your desired function.
        <br>
        <h2>Item Look-up</h2>
        <div class="field">
            <label class="label" for="ildept">Department</label>
            <div class="control">
              <input class="input is-primary" type="number" pattern="\d*" name="ildept" placeholder="22" bind:value={il_dept}>
            </div>
        </div>  
        <div class="field">
            <label class="label" for="ilstyle">Style</label>
            <div class="control">
              <input class="input is-primary" type="number" pattern="\d*" name="ilstyle" placeholder="051729" bind:value={il_style}>
            </div>
        </div>  
        <div class="control">
            <button class="button is-primary" on:click={handleSearchClick}>Submit</button>
        </div>

        <h2>Code Finder</h2>
        <div class="field">
            <label class="label" for="cfdept">Department</label>
            <div class="control">
              <input class="input is-primary" type="number" pattern="\d*" name="cfdept" placeholder="49" bind:value={cf_dept}>
            </div>
        </div>  
        <div class="field">
            <label class="label" for="cfprice">Price</label>
            <div class="control">
              <input class="input is-primary" type="number" pattern="\d*" name="cfprice" placeholder="19.99" bind:value={cf_price}>
            </div>
        </div>  
        <div class="control">
            <button class="button is-primary" on:click={handleFinderClick}>Submit</button>
        </div>
    </div>
</section>
