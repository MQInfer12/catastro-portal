<script lang="ts">
  export let size = 18;
</script>

<div 
  style={`
    width: ${size}px;
    height: ${size}px;
  `}
>
  <slot />
</div>