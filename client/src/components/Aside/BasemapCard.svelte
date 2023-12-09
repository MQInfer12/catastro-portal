<script lang="ts">
  import IconActive from "./IconActive.svelte";
  import IconDefault from "./IconDefault.svelte";

  export let name: string;
  export let src: string | null;
  export let active: boolean;
  export let disabled = false;
</script>

<button {disabled} on:click>
  <div class="img-container">
    {#if src}
      <img {src} alt={`prev-${name}`} />
    {:else if !active}
      <IconDefault type="basemap" color="red" />
    {/if}
    <IconActive color="red" {active} />
  </div>
  <p>{name}</p>
</button>

<style>
  button {
    height: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    border-radius: 8px;
    overflow: hidden;
    gap: 8px;
    background-color: var(--gray-100);
    cursor: pointer;
    transition: all 0.3s;
    border: 2px solid var(--gray-300);
  }
  button:hover {
    opacity: 0.8;
  }
  button:disabled {
    pointer-events: none;
  }
  .img-container {
    height: 60%;
    width: 100%;
    position: relative;
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  p {
    color: var(--gray-900);
    font-size: 14px;
  }
</style>