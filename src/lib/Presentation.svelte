<p>
  <span>Hey! I'm Karolis <i>👋</i></span>
  <span>Living in Lithuania <i>🇱🇹</i></span>
  <span>Exploring the universe <i>🌍</i></span>
  <span>Passioned for Web engineering <i>🕸️ 👨‍💻</i></span>
  <span
    ><a href="mailto:k.grinkevicius@gmail.com" title="Let's get in touch!">Let's get in touch!</a
    ></span
  >
</p>

<style lang="scss">
  p {
    & > span {
      display: block;
      font-size: 0.8rem;
      font-weight: 300;
      color: var(--color-base-muted);
      margin-bottom: 0.2rem;

      @media (min-width: $breakpoint-tablet) {
        font-size: 1.2rem;
      }

      &:first-of-type {
        display: block;
        font-size: 2.4rem;
        font-weight: 600;
        color: var(--color-base);
        margin-bottom: 1rem;

        @media (min-width: $breakpoint-tablet) {
          font-size: 4rem;
        }
      }

      &:not(:first-of-type) {
        letter-spacing: 0.08rem;

        @media (min-width: $breakpoint-tablet) {
          letter-spacing: 0.15rem;
        }
      }

      &:last-of-type {
        font-size: 1rem;
        margin-top: 1rem;

        @media (min-width: $breakpoint-tablet) {
          font-size: 1.5rem;
        }
      }
    }

    i {
      font-style: normal;
    }
  }
</style>
