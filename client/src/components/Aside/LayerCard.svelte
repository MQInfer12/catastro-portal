<script lang="ts">
    import type { ColorType } from "../../global/interfaces/colorType";
  import IconActive from "./IconActive.svelte";
  import IconDefault from "./IconDefault.svelte";
  import type { CatastroLayer } from "./interfaces/catastroLayer";
  export let layer: CatastroLayer;
  export let disabled = false;
  export let color: ColorType = "neutral";
</script>

<button {disabled} on:click>
  <div class="img-container">
    {#if layer.src}
      <img src={layer.src} alt={`prev-${layer.name}`}>
    {:else if !layer.active}
      <IconDefault type={layer.type} color={color} />
    {/if}
    {#if !disabled}
    <IconActive active={layer.active} {color} />
    {/if}
  </div>
  <p>{layer.name}</p>
</button>

<style>
  button {
    display: flex;
    height: 64px;
    align-items: center;
    gap: 16px;
    border: 2px solid var(--gray-300);
    background-color: var(--gray-100);
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s;
  }
  button:hover {
    opacity: 0.8;
  }
  button:disabled {
    pointer-events: none;
  }
  .img-container {
    height: 100%;
    position: relative;
    aspect-ratio: 1 / 1;
  }
  img {
    width: 100%;
    height: 100%;
  }
  p {
    color: var(--gray-900);
    font-size: 14px;
  }
</style>