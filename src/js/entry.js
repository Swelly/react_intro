// Importing CSS to entry point
import '../css/master.scss';

// Import React and JS
import HelloBox from './HelloBox';
import React from 'react';

// RENDAH
React.render(<HelloBox />, document.getElementsByTagName('body')[0]);