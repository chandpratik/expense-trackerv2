import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from '../src/components/context/context';
import { SpeechProvider } from '@speechly/react-client';

import App from './App';
import './index.css';

ReactDOM.render(
  <SpeechProvider appId="922f31ee-5803-4b34-86fb-3397407375b3" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,

  document.getElementById('root')
);
