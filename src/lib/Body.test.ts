import { render } from '@testing-library/svelte';

import Body from './Body.svelte';

describe('Body', () => {
  beforeEach(() => {
    render(Body, { children: vitest.fn() });
  });

  it('renders child component', async () => {
    expect(document.querySelector('body div')).toBeInTheDocument();
  });
});
