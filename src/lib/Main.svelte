<script lang="ts">
  import type { Snippet } from 'svelte';

  const { children }: { children: Snippet } = $props();
</script>

<main>
  {@render children()}
</main>

<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    grid-row: 2;
    grid-column: 2;
    align-items: center;
    margin-top: auto;
    margin-right: auto;
    margin-bottom: auto;
    margin-left: auto;

    @media (min-width: $breakpoint-tablet) {
      flex-direction: row;
      grid-gap: 30px;
    }
  }
</style>
