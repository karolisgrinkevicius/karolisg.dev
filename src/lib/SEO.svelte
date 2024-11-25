<script lang="ts">
  import { base } from '$app/paths';

  const site = 'karolisg.dev';
  const siteUrl = `https://www.${site}`;
  const title = `Karolis Grinkevičius | ${site}`;
  const description = 'Karolis Grinkevičius Personal Website.';
  const logo = `${base}/favicon.png`;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og_site_name" content={title} />
  <meta property="og:url" content={siteUrl} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={logo} />
  <link rel="canonical" href={siteUrl} />

  {@html `<script type="application/ld+json">{
     "@context": "https://schema.org",
     "@type": "Website",
     "name": "${title}",
     "url": "https//${site}",
     "logo": ${logo}}</script>`}
</svelte:head>
