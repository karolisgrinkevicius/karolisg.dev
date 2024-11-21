import { prerender } from './+layout';

describe('Layout', () => {
  it('exports prerender=true', () => {
    expect(prerender).toBe(true);
  });
});
