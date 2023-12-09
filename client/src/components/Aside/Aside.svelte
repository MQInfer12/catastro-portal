<script lang="ts">
  import { blur, fly } from "svelte/transition";
  import { appearMenu } from "../../global/store/state/appearMenu";
  import LeftBar from "./LeftBar.svelte";
  import RightBar from "./RightBar.svelte";
  import { page } from "./store/page";

  let innerWidth = 0;
  $: threshold = innerWidth >= 900;
</script>

<svelte:window bind:innerWidth />
{#if (!threshold && $appearMenu)}
  <button 
    transition:blur={{ duration: 300 }}
    class="bg" 
    on:click={() => $appearMenu = false} 
  />
{/if}
<aside
  style={`${threshold ? "" : `
    position: absolute;
    transform: ${$appearMenu ? "translateX(0)" : "translateX(-100%)"}
  `}`}
>
  <div class="top">
    <h1>{$page}</h1>
  </div>
  <LeftBar />
  <RightBar />
</aside>

<style>
  aside {
    grid-area: sidebar;
    background-color: var(--gray-600);
    width: 350px;
    height: 100%;
    /* box-shadow: 0px 0px 68px 0px rgba(0,0,0,0.3); */
    z-index: 5;
    display: grid;
    grid-template-areas: 
      "left top"
      "left right";
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    transition: all 0.3s;
  }
  .top {
    grid-area: top;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
  }
  .top > h1 {
    text-align: center;
    color: var(--white);
  }
  .bg {
    position: fixed;
    width: 100vw;
    height: 100dvh;
    background-color: rgba(0, 0, 0, .4);
    border: none;
    z-index: 4;
  }
</style>