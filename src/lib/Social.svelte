<script lang="ts">
  import linkedIn from './assets/icons/linkedin.svg';
  import github from './assets/icons/github.svg';

  const items = [
    { url: 'https://www.linkedin.com/in/karolisg/', title: 'LinkedIn', img: linkedIn },
    { url: 'https://github.com/karolisgrinkevicius', title: 'GitHub', img: github }
  ];
</script>

<ul>
  {#each items as item}
    <li>
      <a href={item.url} title={item.title} aria-label={item.title}
        ><img src={item.img} alt={item.title} /></a
      >
    </li>
  {/each}
</ul>

<style lang="scss">
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      a {
        text-decoration: none;
        border: none;

        img {
          width: 32px;
          height: 32px;

          @media (min-width: $breakpoint-tablet) {
            width: 36px;
            height: 36px;
          }
        }
      }

      &:first-of-type {
        margin-right: 0.5rem;

        @media (min-width: $breakpoint-tablet) {
          margin-right: 1rem;
        }
      }
    }
  }
</style>
