<style lang="scss">
  @use './styles/_variables.scss';

  @mixin responsive($size) {
    $query: map-get($breakpoints, $size);

    @media #{$query} {
      @content;
    }
  }

  body {
    display: grid;
    min-width: 360px;
    max-width: 980px;
    min-height: calc(100vh - 1em);
    grid-template-columns: auto minmax(360px, 900px) 1fr;
    grid-template-rows: auto 1fr auto;
    font-family: $font-family;
    font-weight: 400;
    font-style: normal;
    font-size: 24px;
    color: $color-base;
    letter-spacing: -0.05rem;
    line-height: 1.5;
    margin: 0 auto;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  a {
    display: inline-block;
    color: $color-link-default;
    text-decoration: none;
    border-bottom: 1px solid;
    border-bottom-color: 1px solid $color-link-default;
    padding: 0.2rem;

    &:hover {
      color: $color-link-hover;
      border-bottom-color: $color-link-hover;
    }
  }
</style>
