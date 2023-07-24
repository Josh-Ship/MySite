<script lang="ts">
    import { base } from '$app/paths';

</script>
<p class="text">
    Making this blog site because I wanted to see if SvelteKit was any good,
    so far so good.
</p>
<div class="images">
    <ol style="border: 1px; color:white;">
        <li>   
            <img src="{base}/blogDev1.png" width="100%" height="auto">
        </li>
        <li>
            I like the minimalist look of black and white.
        </li>
        <li>
            <img src="{base}/blogDev2.png" width="100%" height="auto">
        </li>
    </ol>
</div>


<style>
    .text {
        color: aliceblue;
        text-align: center;
    }
    .images {
        margin-left: 10%;
        margin-right: 10%;
        appearance: auto;
        display: grid;
    }
    li {
        display: list-item;
    }
</style>