<script lang="ts">
  import type { ColorType } from "../interfaces/colorType";

  type IconPos = "left" | "right";

  export let color: ColorType;
  export let text: string = "";
  export let iconPos: IconPos = "left";
  export let disabled: boolean = false;
</script>

<button
  on:click
  {disabled}
  style={`
    --color-1: var(--${color}-1); 
    --color-2: var(--${color}-2);
    padding: ${text ? "0 12px" : "0 8px"};
  `}
>
  {#if iconPos === "left"}
    <slot />
  {/if}
  {text}
  {#if iconPos === "right"}
    <slot />
  {/if}
</button>

<style>
  button {
    padding: 0 12px;
    color: var(--white);
    border-radius: 8px;
    background-color: var(--color-1);
    border: 2px solid var(--color-2);
    transition: all 0.3s;
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 36px;
    gap: 8px;
  }
  button:hover {
    background-color: var(--color-2);
  }
  button:disabled {
    background-color: var(--gray-200);
    border: 2px solid var(--gray-300);
    pointer-events: none;
  }
</style>