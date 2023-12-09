<script lang="ts">
  import { map, view } from "../../global/store/state/map";
  import MapView from "@arcgis/core/views/MapView";

  const createMap = (domNode: HTMLDivElement) => {
    $view = new MapView({
      container: domNode,
      map: $map,
      zoom: 13,
      center: [-66.15697627104832, -17.3938997748886],
    });
  };
</script>

<section>
  <div use:createMap />
</section>

<style>
  section {
    grid-area: map;
    width: 100%;
    height: 100%;
    background-color: var(--gray-50);
    overflow: hidden;
  }
  div {
    width: 100%;
    height: 100%;
  }
</style>