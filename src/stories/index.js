import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Transform from '../components/transform';
import Toggle from '../components/toggle';

storiesOf('HOC Recipes', module)
.add('Props transformation', () => <Transform />)
.add('Reusable withToggle', () => <Toggle />);
