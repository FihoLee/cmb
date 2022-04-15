import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import awsconfig from './aws-exports';
import Amplify, {Auth} from 'aws-amplify';

Amplify.configure(awsconfig);
Auth.configure(awsconfig);

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);


