<script lang="ts">
  import { fade } from "svelte/transition";
  import IconX from "../../icons/IconX.svelte";
  import Button from "./Button.svelte";
  import IconContainer from "./IconContainer.svelte";
  import type { ColorType } from "../interfaces/colorType";
  export let text = "";
  export let color: ColorType = "neutral";
</script>

<div class="container" transition:fade={{ duration: 200 }}>
  <button class="bg" on:click />
  <div class="content">
    <div class="controls">
      <p>{text}</p>
      <Button
        {color}
        on:click
      >
        <IconContainer><IconX /></IconContainer>
      </Button>
    </div>
    <slot />
  </div>
</div>

<style>
  .container {
    position: fixed;
    inset: 0;
    z-index: 2000;
  }
  .bg {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    border: none;
  }
  .content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--gray-100);
    max-height: 400px;
    border-radius: 8px;
    overflow: auto;
    max-width: 100%;
  }
  .controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px;
  }
  p {
    color: var(--gray-900);
    font-size: 16px;
    opacity: 0.8;
  }
</style>