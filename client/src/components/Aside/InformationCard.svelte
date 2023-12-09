<script lang="ts">
  import type { ServiceData } from "../../global/interfaces/serviceData";
  import IconActive from "./IconActive.svelte";
  export let service: ServiceData;
  export let active: boolean = false;
</script>

<button on:click>
  <div class="img-container">
    <img src={service.img} alt={`prev-${service.name}`}>
    <IconActive {active} color={service.color} />
  </div>
  <p>{service.name}</p>
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
    text-transform: capitalize;
  }
</style>