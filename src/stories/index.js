import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Transform from '../components/transform';

storiesOf('HOC Recipes', module)
  .add('Props transformation', () => <Transform />);
