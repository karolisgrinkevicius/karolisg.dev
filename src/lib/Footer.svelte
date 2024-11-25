<script lang="ts">
  import sveltekit from './assets/icons/sveltekit.svg';

  const year = new Date().getFullYear();
</script>

<footer>
  <p>
    <span><span>© <date>{year}</date></span> by Karolis G. Made with <i>❤️</i></span>
    <span>
      Powered by
      <a href="https://svelte.dev/" title="SvelteKit">
        <img src={sveltekit} alt="SvelteKit" />
      </a>
    </span>
  </p>
</footer>

<style lang="scss">
  footer {
    grid-row: 3;
    grid-column: 1 / span all;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: $breakpoint-tablet) {
      margin-left: 0;
    }

    p {
      display: flex;
      align-items: flex-start;
      flex-wrap: wrap;
      font-size: 0.85rem;
      font-weight: 300;
      line-height: 2em;
      letter-spacing: 0.05rem;
      color: var(--color-base-muted);

      > span {
        display: block;
        margin-left: auto;
        margin-right: auto;

        &:first-of-type {
          @media (min-width: $breakpoint-tablet) {
            margin-left: 0;
            margin-right: 0.3rem;
          }
        }
      }

      i {
        margin-left: 0.4rem;
        margin-right: 0.4rem;
        font-style: normal;
      }

      a {
        border: none;
        text-decoration: none;
        padding: 0;

        img {
          vertical-align: middle;
          height: 22px;
        }
      }
    }
  }
</style>
