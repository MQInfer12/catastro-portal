<script lang="ts">
  import type { SearchOption } from "./interfaces/searchOption";

  export let options: SearchOption[];
  export let handleSearch: (option: SearchOption) => void;
  export let active: boolean;
</script>

{#if active}
<div class="container">
  {#each options as option}
    <button on:click={() => handleSearch(option)} class="row">
      <div>
        <small>{option.small}</small>
        <p>{option.text}</p>
      </div>
      <p style={`background-color: var(--${option.color}-1)`}>{option.type}</p>
    </button>
  {/each}
</div>
{/if}

<style>
  .container {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--gray-200);
    max-height: 250px;
    overflow: auto;
    animation: appearOptionsSearch 0.3s;
    position: absolute;
    top: 100%;
    width: 100%;
  }
  .row {
    background-color: var(--white);
    border: none;
    display: flex;
    padding: 8px 16px;
    text-align: start;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  .row:hover {
    background-color: var(--gray-100);
  }
  .row > div {
    display: flex;
    flex-direction: column;
  }
  .row > div > small {
    color: var(--gray-400);
  }
  .row > div > p {
    color: var(--gray-600);
    font-weight: 600;
  }
  .row > p {
    padding: 2px 4px;
    text-transform: capitalize;
    color: var(--white);
    border-radius: 4px;
  }
  @keyframes appearOptionsSearch {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>