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
  @media screen and (max-width: 1260px) {
    .container {
      position: absolute;
      width: 100%;
      top: 100%;
      padding: 7px 24px;
      background-color: var(--gray-800);
      left: 0;
      display: flex;
      justify-content: flex-end;
    }
  }
</style>