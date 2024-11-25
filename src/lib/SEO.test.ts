import { render, waitFor } from '@testing-library/svelte';

import SEO from './SEO.svelte';

describe('SEO', () => {
  const getMetaTag = (property: string) => document.querySelector(`meta[property="${property}"]`);

  beforeEach(() => {
    render(SEO);
  });

  it('renders document title', async () => {
    await waitFor(() => {
      expect(document.title).toBe('Karolis Grinkevičius | karolisg.dev');
    });
  });

  it('renders description', async () => {
    await waitFor(() => {
      expect(document.querySelector('meta[name="description"]')).toHaveAttribute(
        'content',
        'Karolis Grinkevičius Personal Website.'
      );
    });
  });

  it('renders og meta tags', async () => {
    await waitFor(() => {
      expect(getMetaTag('og_site_name')).toHaveAttribute(
        'content',
        'Karolis Grinkevičius | karolisg.dev'
      );
      expect(getMetaTag('og:url')).toHaveAttribute('content', 'https://www.karolisg.dev');
      expect(getMetaTag('og:type')).toHaveAttribute('content', 'website');
      expect(getMetaTag('og:title')).toHaveAttribute(
        'content',
        'Karolis Grinkevičius | karolisg.dev'
      );
      expect(getMetaTag('og:image')).toHaveAttribute('content', '/favicon.png');
    });
  });

  it('renders canonical url', () => {
    expect(document.querySelector(`link[rel="canonical"]`)).toHaveAttribute(
      'href',
      'https://www.karolisg.dev'
    );
  });

  it('renders schema script', () => {
    expect(document.querySelector('script[type="application/ld+json"]')).toHaveTextContent(
      '{ "@context": "https://schema.org", "@type": "Website", "name": "Karolis Grinkevičius | karolisg.dev", "url": "https//karolisg.dev", "logo": /favicon.png}'
    );
  });
});
