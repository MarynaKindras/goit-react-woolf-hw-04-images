import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

import isPropValid from '@emotion/is-prop-valid';
import { StyleSheetManager } from 'styled-components';

function shouldForwardProp(propName, target) {
  if (typeof target === 'string') {
    return isPropValid(propName);
  }
  return true;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <StyleSheetManager shouldForwardProp={shouldForwardProp}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StyleSheetManager>
);
