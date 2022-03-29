import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
<<<<<<< Updated upstream
import reportWebVitals from "./reportWebVitals";
=======
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
//import reportWebVitals from "./reportWebVitals";
import { configureAmplify } from './services';
import Storage from "@aws-amplify/storage";

configureAmplify();

Amplify.configure(awsExports);

>>>>>>> Stashed changes
ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);
