import React from 'react';
import { render } from '@testing-library/react';
import { Base } from './HomePage.stories';

describe('HomePage', () => {
  it('should display my name and info', () => {
    const { getByText } = render(<Base />);
    expect(getByText('Joshua Allum')).toBeInTheDocument();
    expect(getByText('Software Developer')).toBeInTheDocument();
  });
});
