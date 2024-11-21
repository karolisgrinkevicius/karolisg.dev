import { render, screen, within } from '@testing-library/svelte';

import Footer from './Footer.svelte';

const mockedYear = 2029;

describe('Footer', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(mockedYear, 1, 1, 13));
    render(Footer);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders footer', () => {
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('renders copyright', () => {
    const copyright = screen.getByText(mockedYear);

    expect(copyright.parentElement?.parentElement).toHaveTextContent(
      `© ${mockedYear} by Karolis G. Made with ❤️ powered by`
    );
  });

  it('renders sveltekit link with image', () => {
    const link = screen.getByRole('link', { name: 'SvelteKit' });
    const image = within(link).getByAltText('SvelteKit');

    expect(screen.getByText(/powered by/)).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://svelte.dev/');
    expect(image).toHaveAttribute('src', '/src/lib/assets/icons/sveltekit.svg');
  });
});
