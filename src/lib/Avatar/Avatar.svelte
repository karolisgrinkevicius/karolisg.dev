<script lang="ts">
  import { Image } from '@unpic/svelte';

  const SRC_PREFIX = 'https://res.cloudinary.com/dzm0tz8vx/image/upload/';
</script>

<Image
  src={`${SRC_PREFIX}v1730823753/zesph6paqfd24wqyc2kt.png`}
  alt="Karolis Grinkevičius"
  fetchpriority="high"
  loading="eager"
  width={300}
  height={300}
  breakpoints={[180, 300]}
/>
