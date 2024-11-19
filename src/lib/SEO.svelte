<script lang="ts">
  import { base } from '$app/paths';

  const site = 'karolisg.dev';
  const title = `Karolis Grinkevičius | ${site}`;
  const description = 'Karolis Grinkevičius Personal Website.';
  const logo = `${base}/favicon.png`;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og_site_name" content="'Example.com'" />
  <meta property="og:url" content={`https://${site}`} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={logo} />

  {@html `<script type="application/ld+json">{
     "@context": "https://schema.org",
     "@type": "Website",
     "name": "${title}",
     "url": "https//${site}",
     "logo": ${logo}}</script>`}
</svelte:head>
