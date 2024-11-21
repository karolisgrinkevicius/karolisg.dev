import { render, screen } from '@testing-library/svelte';

import Page from './+page.svelte';

describe('Presentation', () => {
  beforeEach(() => {
    render(Page);
  });

  it('renders page elements', () => {
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
