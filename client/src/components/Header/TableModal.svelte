<script lang="ts">
  import Modal from "../../global/components/Modal.svelte";
  import type { ColorType } from "../../global/interfaces/colorType";
  import type { Feature } from "../../global/interfaces/geojson";

  export let closeModal: () => void
  export let title: string
  export let color: ColorType
  export let type: string
  export let feature: Feature
</script>

<Modal 
  on:click={closeModal}
  text={title}
  {color}
>
  <div class="container">
    <div 
      class="table-container"
      style={`
        border: 1px solid var(--${color}-2);
      `}
    >
      <table>
        <thead>
          <tr>
            <th 
            class="th-title"
            style={`
              background-color: var(--${color}-2); 
            `}
              colspan="2"
            >{type}</th>
          </tr>
        </thead>
        <tbody>
          {#each Object.keys(feature.properties) as key}
            {#if !(key === "FID" || key === "OBJECTID")}
              <tr>
                <th 
                  class="th-table"
                  style={`
                    background-color: var(--${color}-1); 
                    border: 1px solid var(--${color}-2);
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
                    border: 1px solid var(--${color}-2);
                  `}
                >{feature.properties[key]}</td>
              </tr>
            {/if}
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</Modal>

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