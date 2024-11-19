<script lang="ts">
  import sveltekit from './assets/icons/sveltekit.svg';

  const year = new Date().getFullYear();
</script>

<p>
  <span>© {year}</span> by Karolis G. Made with ❤️ powered by
  <a href="https://svelte.dev/" title="SvelteKit"><img src={sveltekit} alt="SvelteKit" /></a>
</p>

<style lang="scss">
  p {
    display: flex;
    align-items: flex-start;
    grid-row: 3;
    grid-column: 1 / span all;
    font-size: 0.85rem;
    font-weight: 300;
    letter-spacing: 0.05rem;
    color: var(--color-base-muted);
    margin-left: auto;
    margin-right: auto;

    @media (min-width: $breakpoint-tablet) {
      margin-left: 0;
    }

    span {
      margin-right: 0.3rem;
    }

    a {
      border: none;
      text-decoration: none;
      padding: 0;

      img {
        margin-left: 0.2rem;
        height: 22px;
      }
    }
  }
</style>
