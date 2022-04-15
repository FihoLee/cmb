import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import reportWebVitals from "./reportWebVitals";
import Amplify, { Auth, Storage } from 'aws-amplify';
import awsconfig from './aws-exports';

Auth.configure(awsconfig);
Amplify.configure(awsconfig);
Storage.configure(awsconfig);

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);


