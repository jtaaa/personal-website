import { render, cleanup } from '@testing-library/react';
import React from 'react';
import Icon, { IconType } from './Icon';
import { ICONS } from './constants';

describe('Icon', () => {
  it('should render the correct icon', () => {
    Object.keys(ICONS).forEach(type => {
      const { getByRole } = render(<Icon type={type as IconType} />);

      const img = getByRole('img');
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('src', ICONS[type].src);
      expect(img).toHaveAttribute('alt', ICONS[type].alt);

      cleanup();
    });
  });

  it('should render as a link if href is provided', () => {
    const { getByRole, rerender } = render(
      <Icon type="github" href="https://github.com/jtaaa/" />,
    );

    expect(getByRole('img').parentElement).toHaveAttribute(
      'href',
      'https://github.com/jtaaa/',
    );

    rerender(<Icon type="github" />);

    expect(getByRole('img').parentElement).not.toHaveAttribute(
      'href',
      'https://github.com/jtaaa/',
    );
  });

  it('should render greyed if greyed is provided', () => {
    const { rerender, container } = render(<Icon type="github" greyed />);

    expect(container.firstElementChild).toHaveStyleRule(
      'filter',
      'opacity(45%) grayscale(100%)',
      {
        modifier: 'img',
      },
    );
    expect(container.firstElementChild).toHaveStyleRule('filter', 'none', {
      modifier: 'img:hover',
    });

    rerender(<Icon type="github" />);

    expect(container.firstElementChild).not.toHaveStyleRule('filter');
  });
});
