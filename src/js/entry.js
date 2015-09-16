// Importing CSS to entry point
import '../css/master.scss';

// Import React and JS
import React from 'react';
import HelloBox from './HelloBox';

// RENDAH
React.render(
  <HelloBox />, document.getElementById('app')
);