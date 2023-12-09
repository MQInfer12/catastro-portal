<script lang="ts">
  import type { ColorType } from "../../global/interfaces/colorType";
  import IconImage from "../../icons/IconImage.svelte";
  import IconLayers from "../../icons/IconLayers.svelte";
  import IconTarget from "../../icons/IconTarget.svelte";
  import IconWorld from "../../icons/IconWorld.svelte";
  export let color: ColorType;
  export let type: "target" | "image" | "layer" | "basemap"
</script>

<div class="actual-container">
  <div style="background-color: var(--{color}-1);" class="bg" />
  <div class="icon-container">
    {#if type === "target"}
      <IconTarget />
    {:else if type === "image"}
      <IconImage />
    {:else if type === "layer"}
      <IconLayers />
    {:else if type === "basemap"}
      <IconWorld />
    {/if}
  </div>
</div>

<style>
  .actual-container {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    isolation: isolate;
  }
  .icon-container {
    position: absolute;
    inset: 0;
    z-index: 2;
    padding: 12px;
  }
  .bg {
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.5;
  }
</style>