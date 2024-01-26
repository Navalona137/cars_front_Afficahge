import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; 
import App from './App'; 

ReactDOM.render(
  <BrowserRouter> {}
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


/*const root = document.getElementById('root');
const rootInstance = createRoot(root);
rootInstance.render(<App />);
*/
