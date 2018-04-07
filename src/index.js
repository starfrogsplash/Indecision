import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Indecision from './components/Indecision';
// // import User from './User'; 
// import Counter from './counter'
import registerServiceWorker from './registerServiceWorker';
import './styles/styles.scss';
import './styles/styles.css';
import 'normalize.css'




ReactDOM.render(<Indecision/>, document.getElementById('root'));
registerServiceWorker();
