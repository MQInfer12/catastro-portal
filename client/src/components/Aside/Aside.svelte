<script lang="ts">
  import LeftBar from "./LeftBar.svelte";
  import RightBar from "./RightBar.svelte";
  import { page } from "./store/page";
</script>

<aside>
  <div class="top">
    <h1>{$page}</h1>
  </div>
  <LeftBar />
  <RightBar />
</aside>

<style>
  aside {
    grid-area: sidebar;
    background-color: var(--gray-600);
    width: 350px;
    height: 100%;
    /* box-shadow: 0px 0px 68px 0px rgba(0,0,0,0.3); */
    z-index: 4;
    display: grid;
    grid-template-areas: 
      "left top"
      "left right";
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
  }
  .top {
    grid-area: top;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
  }
  .top > h1 {
    text-align: center;
    color: var(--white);
  }
</style>