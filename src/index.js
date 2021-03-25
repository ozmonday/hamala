import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import { Provider } from 'react-redux'
import firebase from 'firebase/app'

const config = {
  apiKey: "AIzaSyBGELVoZCrr1O8YmGcgYTXcrNpP7uhr4SY",
  authDomain: "pregnancymapping.firebaseapp.com",
  projectId: "pregnancymapping",
  storageBucket: "pregnancymapping.appspot.com",
  messagingSenderId: "413694018825",
  appId: "1:413694018825:web:e297858606cd82e6b3ffd8",
  measurementId: "G-PPEZ4B1F0C"
}

firebase.initializeApp(config)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
