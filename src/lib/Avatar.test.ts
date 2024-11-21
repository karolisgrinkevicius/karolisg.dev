import { render, screen } from '@testing-library/svelte';

import Avatar from './Avatar.svelte';

describe('Avatar', () => {
  beforeEach(() => {
    render(Avatar);
  });

  it('renders image', () => {
    const image = screen.getByRole('img', { name: 'Karolis Grinkevičius' });

    expect(image).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dzm0tz8vx/image/upload/w_300,h_300,c_lfill,f_auto/v1731608929/bc17e3f2091ff48ff4b3d8e3433e947f_ndgrxh'
    );
    expect(image).toHaveAttribute(
      'srcset',
      expect.stringContaining(
        'https://res.cloudinary.com/dzm0tz8vx/image/upload/w_180,h_180,c_lfill,f_auto/v1731608929/bc17e3f2091ff48ff4b3d8e3433e947f_ndgrxh 180w'
      )
    );
    expect(image).toHaveAttribute(
      'srcset',
      expect.stringContaining(
        'https://res.cloudinary.com/dzm0tz8vx/image/upload/w_300,h_300,c_lfill,f_auto/v1731608929/bc17e3f2091ff48ff4b3d8e3433e947f_ndgrxh 300w'
      )
    );
    expect(image).toHaveAttribute('sizes', '(min-width: 300px) 300px, 100vw');
  });
});
