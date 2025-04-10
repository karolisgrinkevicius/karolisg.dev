<script>
  import Social from './Social.svelte';
</script>

<nav>
  <ul>
    <li>
      <a href="https://www.karolisg.dev" title="Karolis Grinkevičius"
        ><span>&lt;</span><i>karolis g.</i><span>&sol;&gt;</span></a
      >
    </li>
  </ul>
  <Social testId="social" />
</nav>

<style lang="scss">
  nav {
    display: flex;
    grid-column: 1 / span all;

    ul {
      display: flex;
      width: 100%;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: center;
      margin-bottom: 30px;
      margin: 0;
      margin-top: -1.5rem;
      padding: 0;
      list-style: none;

      > li:first-of-type > a {
        font-family: var(--font-family-brand);
        color: var(--color-base);
        border-bottom: none;
        padding-bottom: 0;
        font-size: 2.5rem;
        font-weight: 700;
        text-transform: lowercase;
        letter-spacing: -0.15rem;
        text-wrap: nowrap;

        > i {
          font-style: normal;
          vertical-align: middle;
        }

        @media (min-width: $breakpoint-tablet) {
          font-size: 5rem;
          letter-spacing: -0.3rem;
        }
        > span:first-of-type {
          margin-right: 1rem;

          @media (min-width: $breakpoint-tablet) {
            margin-right: 2rem;
          }
        }

        > span:last-of-type {
          margin-left: 0.3rem;

          @media (min-width: $breakpoint-tablet) {
            margin-left: 1rem;
          }
        }

        span:first-of-type,
        span:last-of-type {
          font-size: 4rem;
          font-style: italic;
          color: var(--color-base-light);
          font-weight: 200;
          vertical-align: middle;

          @media (min-width: $breakpoint-tablet) {
            font-size: 6rem;
          }

          @media (min-width: $breakpoint-desktop) {
            font-size: 7rem;
          }
        }

        &:hover {
          color: var(--color-base);
        }
      }
    }
  }
</style>
