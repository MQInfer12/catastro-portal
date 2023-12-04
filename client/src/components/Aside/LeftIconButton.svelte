<script lang="ts">
  import type { ColorType } from "../../global/interfaces/colorType";

  export let color: ColorType;
  export let disabled: boolean;
  export let title: string;
  export let height: string = "auto";
  
  let style = `
    --color-1: var(--${color}-1); 
    --color-2: var(--${color}-2); 
    height: ${height};
    aspect-ratio: ${height !== "auto" ? "auto" : "1 / 1"};
  `;
</script>

<button 
  on:click
  {title}
  {disabled}
  {style}
>
  <slot />
</button>

<style>
  button {
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    cursor: pointer;
    background-color: var(--color-1);
    border: 1px solid var(--color-2);
    transition: all 0.3s;
  }
  button:hover {
    background-color: var(--color-2);
  }
  button:disabled {
    background-color: var(--gray-200);
    border: 1px solid var(--gray-200);
    pointer-events: none;
  }
</style>