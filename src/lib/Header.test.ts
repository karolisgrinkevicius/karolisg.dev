import { render, screen } from '@testing-library/svelte';
import Header from './Header.svelte';

describe('Header', () => {
  beforeEach(() => {
    render(Header);
  });

  it('renders navigation', () => {
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('renders logo', () => {
    expect(screen.getByRole('link', { name: '< karolis g. />' })).toHaveAttribute(
      'href',
      'https://www.karolisg.dev'
    );
  });

  it('renders social icons', () => {
    expect(screen.getByTestId('social')).toBeInTheDocument();
  });
});
