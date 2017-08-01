import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import App from './components/App';
import Footer from './components/Footer';

import './css/header.css';
import './css/footer.css';

ReactDOM.render(
    <div>
        <Header />
        <App />
        <Footer />
    </div>,
    document.getElementById('container')
);
