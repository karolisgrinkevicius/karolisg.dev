<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
  }

  const { children }: Props = $props();
</script>

<main>
  {@render children()}
</main>

<style>
  main {
    display: flex;
    grid-row: 2;
    grid-column: 2;
    grid-gap: 30px;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
  }
</style>
