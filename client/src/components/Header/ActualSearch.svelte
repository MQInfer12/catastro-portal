<script>
  import Button from "../../global/components/Button.svelte";
  import IconContainer from "../../global/components/IconContainer.svelte";
import { searchResult } from "../../global/store/search";
  import IconDetail from "../../icons/IconDetail.svelte";
  import IconX from "../../icons/IconX.svelte";
</script>

{#if $searchResult}
<div class="container">
  <p>Viendo:</p>
  <Button
    color={$searchResult.option.color}  
    text={$searchResult.option.text}  
    iconPos="right"
  >
    <IconContainer><IconDetail /></IconContainer>
  </Button>
  <Button
    color={$searchResult.option.color}    
    on:click={() => $searchResult = null}
  >
    <IconContainer><IconX /></IconContainer>
  </Button>
</div>
{/if}

<style>
  .container {
    display: flex;
    align-items: center;
    color: var(--white);
    gap: 12px;
  }
</style>