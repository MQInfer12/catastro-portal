<script lang="ts">
  import type { ColorType } from "../interfaces/colorType";

  export let color: ColorType;
  export let text: string = "";
</script>

<button
  on:click
  style={`
    --color-1: var(--${color}-1); 
    --color-2: var(--${color}-2);
    padding: ${text ? "0 12px" : "0 8px"} 
  `}
>
  <slot />
  {text}
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
</style>