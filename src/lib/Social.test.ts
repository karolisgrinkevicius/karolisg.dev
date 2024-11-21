import { render, screen, within } from '@testing-library/svelte';

import Social from './Social.svelte';

describe('Social', () => {
  beforeEach(() => {
    render(Social);
  });

  it('renders list', async () => {
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('renders linkedin link with icon', async () => {
    const link = screen.getByLabelText('LinkedIn');
    const icon = within(link).getByRole('img', { name: 'LinkedIn' });

    expect(link).toBeInTheDocument();
    expect(icon).toHaveAttribute('src', '/src/lib/assets/icons/linkedin.svg');
  });

  it('renders github link with icon', async () => {
    const link = screen.getByLabelText('GitHub');
    const icon = within(link).getByRole('img', { name: 'GitHub' });

    expect(link).toBeInTheDocument();
    expect(icon).toHaveAttribute('src', '/src/lib/assets/icons/github.svg');
  });
});
