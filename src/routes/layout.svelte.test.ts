import { render } from '@testing-library/svelte';

import LayoutSvelte from './+layout.svelte';

describe('LayoutSvelte', () => {
  it('renders children', () => {
    render(LayoutSvelte, { children: vi.fn() });

    expect(document.querySelector('body div')).toBeInTheDocument();
  });
});
