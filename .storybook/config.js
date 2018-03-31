import { configure } from '@storybook/react';

function loadStories() {
  require('../src/transform');
  require('../src/state-handlers');
}

configure(loadStories, module);