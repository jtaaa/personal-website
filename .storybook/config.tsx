import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import GlobalStyles from '../src/utils/styled-components/GlobalStyles';

addDecorator(s => (
  <>
    <GlobalStyles />
    {s()}
  </>
));

configure(require.context('../src', true, /\.stories\.tsx$/), module);
