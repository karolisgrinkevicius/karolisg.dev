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
      'https://res.cloudinary.com/dzm0tz8vx/image/upload/w_300,h_300,f_auto,c_lfill/v1731608929/headshot.PNG'
    );
    expect(image).toHaveAttribute(
      'srcset',
      expect.stringContaining(
        'https://res.cloudinary.com/dzm0tz8vx/image/upload/w_300,h_300,f_auto,c_lfill/v1731608929/headshot.PNG 300w'
      )
    );
    expect(image).toHaveAttribute(
      'srcset',
      expect.stringContaining(
        'https://res.cloudinary.com/dzm0tz8vx/image/upload/w_600,h_600,f_auto,c_lfill/v1731608929/headshot.PNG 600w'
      )
    );
    expect(image).toHaveAttribute('sizes', '(max-width: 991px) 200px, 300px');
  });
});
