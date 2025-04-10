<p>
  <span>Hey! I'm Karolis</span>
  <span> Living in Lithuania </span>
  <span>Exploring the universe</span>
  <span>Passioned for Web engineering</span>
  <span>
    <a href="mailto:k.grinkevicius@gmail.com" title="Let's get in touch!"> Let's get in touch! </a>
  </span>
</p>

<style lang="scss">
  p {
    & > span {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      font-weight: 300;
      color: var(--color-base-muted);
      margin-bottom: 0.2rem;

      @media (min-width: $breakpoint-tablet) {
        justify-content: flex-start;
        font-size: 1.2rem;
      }

      &:first-of-type {
        display: block;
        font-size: 1.8rem;
        font-weight: 900;
        color: var(--color-base);
        margin-bottom: 1rem;
        text-align: center;

        @media (min-width: $breakpoint-tablet) {
          text-align: left;
          font-size: 2.4rem;
        }
      }

      &:last-of-type {
        font-size: 1rem;
        margin-top: 1rem;

        a {
          font-size: 1rem;
          font-weight: var(--font-weight-bold);
          background-color: var(--color-button-background);
          color: var(--color-button-text);
          padding: 0.8rem 1.6rem;
          border-radius: 2rem;
          border-bottom: 2px solid;

          &:hover {
            background-color: var(--color-button-background-hover);
          }

          &:active {
            background-color: var(--color-button-background-active);
          }
        }

        @media (min-width: $breakpoint-tablet) {
          font-size: 1.2rem;
        }
      }
    }
  }
</style>
