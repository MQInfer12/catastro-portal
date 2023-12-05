<script lang="ts">
  import Modal from "../../global/components/Modal.svelte";
  import { searchModalState } from "../../global/store/searchModal";
</script>

{#if $searchModalState}
<Modal 
  on:click={() => $searchModalState = null}
  text={$searchModalState.title}
  color={$searchModalState.result.option.color}
>
  <div class="container">
    <div 
      class="table-container"
      style={`
        border: 1px solid var(--${$searchModalState.result.option.color}-2);
      `}
    >
      <table>
        <thead>
          <tr>
            <th 
            class="th-title"
            style={`
              background-color: var(--${$searchModalState.result.option.color}-2); 
            `}
              colspan="2"
            >{$searchModalState.result.option.type}</th>
          </tr>
        </thead>
        <tbody>
          {#each Object.keys($searchModalState.result.geojson.features[0].properties) as key}
            {#if !(key === "FID" || key === "OBJECTID")}
              <tr>
                <th 
                  class="th-table"
                  style={`
                    background-color: var(--${$searchModalState.result.option.color}-1); 
                    border: 1px solid var(--${$searchModalState.result.option.color}-2);
                  `}
                >
                  {#if key === "Shape_Area"}
                    Área
                  {:else if key === "Shape_Length" || key === "Shape_Leng"}
                    Perímetro
                  {:else}
                    {key}
                  {/if}
                </th>
                <td
                  style={`
                    border: 1px solid var(--${$searchModalState.result.option.color}-2);
                  `}
                >{$searchModalState.result.geojson.features[0].properties[key]}</td>
              </tr>
            {/if}
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</Modal>
{/if}

<style>
  .container {
    padding: 16px;
  }
  .table-container {
    border-radius: 8px;
    overflow: hidden;
    width: 500px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th {
    color: var(--white);
    padding: 2px 8px;
    text-transform: capitalize;
    text-align: start;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  td {
    background-color: var(--white);
    color: var(--gray-800);
    padding: 2px 8px;
    text-align: start;
  }
  .th-title {
    text-align: center;
  }
</style>