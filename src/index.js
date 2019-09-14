import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import AnswerCard from "./components/AnswerCard";

ReactDOM.render(
    <div
        style={{width: "100%", height: "500px"}}
    >
        <AnswerCard src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6213/6213226_sd.jpg"/>

    </div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
