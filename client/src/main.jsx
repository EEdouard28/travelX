import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './components/post/Post.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/comment/Comment.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
