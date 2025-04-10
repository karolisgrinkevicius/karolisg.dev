<script lang="ts">
  import { Image } from '@unpic/svelte';
  import { fullName } from './configs/meta.json';
  import { getImageSrc } from './utils/cdn';

  const imageSrc = getImageSrc({ srcVersion: 'v1731608929', srcId: 'headshot', extension: 'PNG' });
  const imageConfig = {
    src: imageSrc,
    alt: fullName,
    fetchpriority: 'high' as const,
    loading: 'eager' as const,
    title: fullName,
    aspectRatio: 1,
    width: 300,
    // breakpoints: [200, , 300],
    sizes: '(max-width: 991px) 200px, 300px',
    style: 'border-radius: 50%; width: 100%;'
  };
</script>

<div>
  <Image {...imageConfig} />
</div>

<style lang="scss">
  // div {
  //   width: 200px;
  //   height: 200px;

  //   @media (min-width: $breakpoint-desktop) {
  //     width: 300px;
  //     height: 300px;
  //   }
  // }
</style>
