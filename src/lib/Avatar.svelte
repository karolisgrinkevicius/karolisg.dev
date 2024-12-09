<script lang="ts">
  import { Image } from '@unpic/svelte';

  const getImageSrc = () => {
    const CLOUDINARY_ENV = 'dzm0tz8vx';
    const SRC_PREFIX = `https://res.cloudinary.com/${CLOUDINARY_ENV}/image/upload/`;
    const SRC_VERSION = 'v1731608929';
    const SRC_ID = 'bc17e3f2091ff48ff4b3d8e3433e947f_ndgrxh';
    const EXT = 'PNG';

    return `${SRC_PREFIX}${SRC_VERSION}/${SRC_ID}.${EXT}`;
  };

  const imageSrc = getImageSrc();
</script>

<Image
  src={imageSrc}
  alt="Karolis Grinkevičius"
  fetchpriority="high"
  loading="eager"
  width={300}
  height={300}
  breakpoints={[180, 300]}
  title="Karolis Grinkevičius"
/>
