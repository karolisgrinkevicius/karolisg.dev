import { render, screen } from '@testing-library/svelte';
import Header from './Header.svelte';

describe('Header', () => {
  beforeEach(() => {
    render(Header);
  });

  it('renders navigation', () => {
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('renders logo', async () => {
    expect(screen.getByRole('link', { name: '< karolis g. />' })).toHaveAttribute('href', '/');
  });

  it('renders social icons', () => {
    expect(screen.getByTestId('social')).toBeInTheDocument();
  });
});
