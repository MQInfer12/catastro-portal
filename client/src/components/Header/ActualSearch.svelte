<script lang="ts">
  import Button from "../../global/components/Button.svelte";
  import IconContainer from "../../global/components/IconContainer.svelte";
  import type { ColorType } from "../../global/interfaces/colorType";
  import IconDetail from "../../icons/IconDetail.svelte";
  import IconX from "../../icons/IconX.svelte";

  export let text: string;
  export let color: ColorType;
  export let openModal: () => void;
  export let destroy: () => void;
</script>

<div class="container">
  <p>Viendo:</p>
  <Button
    {color}
    {text}
    iconPos="right"
    on:click={openModal}
  >
    <IconContainer><IconDetail /></IconContainer>
  </Button>
  <Button
    {color}  
    on:click={destroy}
  >
    <IconContainer><IconX /></IconContainer>
  </Button>
</div>

<style>
  .container {
    display: flex;
    align-items: center;
    color: var(--white);
    gap: 12px;
  }
</style>