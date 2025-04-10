import { render, screen } from '@testing-library/svelte';

import Social from './Social.svelte';

describe('Social', () => {
  beforeEach(() => {
    render(Social);
  });

  it('renders list', () => {
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('renders linkedin link with icon', () => {
    const link = screen.getByLabelText('LinkedIn');

    expect(link).toBeInTheDocument();
  });

  it('renders github link with icon', () => {
    const link = screen.getByLabelText('GitHub');

    expect(link).toBeInTheDocument();
  });
});
