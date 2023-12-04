<script lang="ts">
  import type { ColorType } from "../../global/interfaces/colorType";
  import IconCheck from "../../icons/IconCheck.svelte";

  export let active: boolean;
  export let color: ColorType;
</script>

{#if active}
  <div class="actual-container">
    <div style="background-color: var(--{color}-1);" class="bg" />
    <div class="icon-container">
      <IconCheck />
    </div>
  </div>
{/if}

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