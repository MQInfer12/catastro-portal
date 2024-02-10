<script>
  import Button from "../../global/components/Button.svelte";
  import IconContainer from "../../global/components/IconContainer.svelte";
  import { cachedServices } from "../../global/store/state/cachedServices";
  import IconCheckNoOutline from "../../icons/IconCheckNoOutline.svelte";
  import IconX from "../../icons/IconX.svelte";

  const changeCached = () => {
    $cachedServices = !$cachedServices;
    localStorage.setItem("cachedServices", JSON.stringify($cachedServices));
  }
</script>
<div class="container">
  <div class="config">
    <p>Usar capas de información en el caché</p>
    <Button
      color="neutral"
      on:click={changeCached}
      disabled
    ><IconContainer>
      {#if $cachedServices}
      <IconCheckNoOutline />
      {:else}
      <IconX />
      {/if}
    </IconContainer></Button>
  </div>
</div>

<style>
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .config {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
  }
  p {
    font-size: 14px;
    color: var(--white);
    margin-left: 4px;
    text-align: center;
    text-wrap: balance;
    opacity: 0.8;
  }
</style>