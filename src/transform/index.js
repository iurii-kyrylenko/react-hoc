import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import FilterByStatus from './filterByStatus';

storiesOf('Props transformation', module)
  .add('filterByStatus', () => <FilterByStatus />)
