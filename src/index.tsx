// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import ReactDOM from 'react-dom/client';
import './styles/index.sass'
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement )
root.render(<App/>)

