<script lang="ts">
  import type { Snippet } from 'svelte';

  const { children }: { children: Snippet } = $props();
</script>

{@render children()}

<style lang="scss">
  :global(:root) {
    --font-family: 'Montserrat Variable', sans-serif;
    --font-family-brand: 'Oswald Variable', sans-serif;
    --font-weight-bold: 700;
    --color-base: #2a2d29;
    --color-base-muted: #697067;
    --color-base-light: #d4d8d6;
    --color-link-default: #4f9070;
    --color-link-hover: #387a59;
    --color-link-active: #306d4f;
    --color-button-background: #357154;
    --color-button-background-hover: #1d6943;
    --color-button-background-active: #0f4e2f;
    --color-button-text: #ffffff;
  }

  :global(body) {
    display: grid;
    min-width: calc($breakpoint-mobile - 2rem);
    max-width: 980px;
    min-height: calc(100vh - 2rem);
    grid-template-columns: auto minmax(calc($breakpoint-mobile - 2rem), 900px) 1fr;
    grid-template-rows: auto 1fr auto;
    font-family: var(--font-family);
    font-weight: 400;
    font-style: normal;
    font-size: 24px;
    color: var(--color-base);
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
    padding: 0.2rem;

    &:hover {
      color: var(--color-link-hover);
    }

    &:active {
      color: var(--color-link-active);
    }
  }
</style>
