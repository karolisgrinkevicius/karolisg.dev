<script lang="ts">
  import Icon from '@iconify/svelte';
  import type { PropsWithTestId } from './types';

  const items = [
    {
      url: 'https://www.linkedin.com/in/karolisg/',
      title: 'LinkedIn',
      icon: 'ph:linkedin-logo-duotone',
      width: 50,
      height: 50
    },
    {
      url: 'https://github.com/karolisgrinkevicius',
      title: 'GitHub',
      icon: 'line-md:github-twotone',
      width: 40,
      height: 40
    }
  ];

  const { testId }: PropsWithTestId = $props();
</script>

<ul data-testid={testId}>
  {#each items as item}
    <li>
      <a href={item.url} title={item.title} aria-label={item.title}>
        <Icon icon={item.icon} width={item.width} height={item.height} />
      </a>
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
