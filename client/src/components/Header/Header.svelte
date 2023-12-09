<script lang="ts">
  import { clickModalState } from "../../global/store/state/clickModalState";
  import { searchModalState } from "../../global/store/state/searchModal";
  import Controls from "./Controls.svelte";
  import Data from "./Data.svelte";
  import Logo from "./Logo.svelte";
  import TableModal from "./TableModal.svelte";
</script>

<header>
  <div class="info">
    <Logo />
    <Data />
  </div>
  <Controls />
</header>
{#if $searchModalState}
  <TableModal 
    closeModal={() => $searchModalState = null}
    title={$searchModalState.title}
    color={$searchModalState.result.option.color}
    type={$searchModalState.result.option.type}
    feature={$searchModalState.result.geojson.features[0]}
  />
{/if}
{#if $clickModalState}
  <TableModal 
    closeModal={() => $clickModalState = null}
    title="Detalle de búsqueda"
    color={$clickModalState.option.color}
    type={$clickModalState.option.type}
    feature={$clickModalState.feature}
  />
{/if}

<style>
  header {
    grid-area: header;
    display: flex;
    flex-direction: column;
    z-index: 4;
    background-color: var(--gray-700);
  }
  .info {
    height: 50px;
    display: flex;
    padding: 0 24px;
    align-items: center;
    justify-content: space-between;
  }
</style>