import { render } from '@testing-library/svelte';

import Main from './Main.svelte';

describe('Main', () => {
  beforeEach(() => {
    render(Main, { children: vi.fn() });
  });

  it('renders child component', () => {
    expect(document.querySelector('body div')).toBeInTheDocument();
  });
});
