<script lang="ts">
  import Controls from "./Controls.svelte";
import Data from "./Data.svelte";
import Logo from "./Logo.svelte";

</script>

<header>
  <div class="info">
    <Logo />
    <Data />
  </div>
  <Controls />
</header>

<style>
  header {
    grid-area: header;
    display: flex;
    flex-direction: column;
    z-index: 5;
    background-color: var(--gray-700);
  }
  .info {
    height: 60px;
    display: flex;
    padding: 0 24px;
    align-items: center;
    justify-content: space-between;
  }
</style>