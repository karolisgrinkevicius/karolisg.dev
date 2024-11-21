import { render, screen } from '@testing-library/svelte';

import Presentation from './Presentation.svelte';

describe('Presentation', () => {
  beforeEach(() => {
    render(Presentation);
  });

  it('renders presentation text', () => {
    expect(screen.getByText("Hey! I'm Karolis")).toBeInTheDocument();
    expect(screen.getByText('Living in Lithuania')).toBeInTheDocument();
    expect(screen.getByText('Exploring the universe')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: "Let's get in touch!" })).toHaveAttribute(
      'href',
      'mailto:k.grinkevicius@gmail.com'
    );
  });
});
