<nav>
  <ul>
    <li>
      <a href="/"><span>&lt;</span><i>Karolis G.</i><span>&sol;&gt;</span></a>
    </li>
    <li><a href="#" title="Download CV">Download CV</a></li>
  </ul>
</nav>

<style lang="scss">
  nav {
    grid-column: 1 / span all;

    ul {
      display: flex;
      width: 100%;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: center;
      margin-bottom: 30px;
      margin: 0;
      padding: 0;
      list-style: none;

      > li:first-of-type > a {
        color: var(--color-base);
        border-bottom: none;
        padding-bottom: 0;
        font-size: 5rem;
        font-weight: 700;
        text-transform: lowercase;
        letter-spacing: -0.3rem;
        text-wrap: nowrap;

        i {
          font-style: normal;
          vertical-align: middle;
        }

        > span:first-of-type {
          margin-right: 1rem;
        }

        > span:last-of-type {
          margin-left: 1.5rem;
        }

        span:first-of-type,
        span:last-of-type {
          font-size: 4rem;
          font-family: cursive;
          color: var(--color-base-light);
          font-weight: 300;
        }

        &:hover {
          color: var(--color-base);
        }
      }
    }
  }
</style>
