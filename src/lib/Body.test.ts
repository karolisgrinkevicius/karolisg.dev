import { render } from '@testing-library/svelte';

import Body from './Body.svelte';

describe('Body', () => {
  beforeEach(() => {
    render(Body, { children: vi.fn() });
  });

  it('renders child component', () => {
    expect(document.querySelector('body div')).toBeInTheDocument();
  });
});
