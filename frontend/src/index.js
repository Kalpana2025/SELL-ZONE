import React from 'react';
import {createRoot}from 'react-dom/client';
import App from './App';
import {Provider} from  "react-redux";
import store from "./store";
import { positions,transitions,Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  // setTimeout:10000,
  position:positions.BOTTOM_CENTER,
  transition:transitions.SCALE,
};



const container = document.getElementById('root');
const root=createRoot(container);

root.render(
<Provider store = {store}>

  <AlertProvider template={AlertTemplate}{...options}>
  <App/>
  </AlertProvider>
</Provider>

);


