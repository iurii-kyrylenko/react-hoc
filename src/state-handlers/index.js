import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Toggle1 from './toggle-1';
import Toggle2 from './toggle-2';

storiesOf('State and handlers', module)
  .add('withToggle (state)', () => <Toggle1 />)
  .add('withToggle (state + handlers)', () => <Toggle2 />);
