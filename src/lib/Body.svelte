<script lang="ts">
  import type { Snippet } from 'svelte';

  const { children }: { children: Snippet } = $props();
</script>

{@render children()}

<style lang="scss">
  :global(:root) {
    --font-family: 'Oswald Variable', sans-serif;
    --color-base: #41453f;
    --color-base-muted: #697067;
    --color-base-light: #d4d8d6;
    --color-link-default: #0e730e;
    --color-link-hover: #30af30;
  }

  :global(body) {
    display: grid;
    min-width: 360px;
    max-width: 980px;
    min-height: calc(100vh - 2rem);
    grid-template-columns: auto minmax(360px, 900px) 1fr;
    grid-template-rows: auto 1fr auto;
    font-family: var(--font-family);
    font-weight: 400;
    font-style: normal;
    font-size: 24px;
    color: var(--color-base);
    letter-spacing: -0.05rem;
    line-height: 1.5;
    margin: 0 auto;
    padding: 1rem;

    @media (min-width: $breakpoint-tablet) {
      padding: 2rem;
      min-height: calc(100vh - 4rem);
    }
  }

  :global(a) {
    display: inline-block;
    color: var(--color-link-default);
    text-decoration: none;
    border-bottom: 1px solid;
    border-bottom-color: 1px solid var(--color-link-default);
    padding: 0.2rem;

    &:hover {
      color: var(--color-link-hover);
      border-bottom-color: var(--color-link-hover);
    }
  }
</style>
