import React from 'react';
import { render } from 'react-dom';

import App from './components/App';

import registerServiceWorker from './registerServiceWorker';

import './css/bootstrap.min.css';
import './css/style.css';

/*
 fonts Import here
*/
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Karla', 'Lato', 'Open Sans', 'Roboto', 'sans-serif']
  }
});



/*
STateless Router Components Setup
*/

const Root = () => {
  return (
    <App />
  )
}
render(<Root />, document.querySelector('#root'));
registerServiceWorker();
