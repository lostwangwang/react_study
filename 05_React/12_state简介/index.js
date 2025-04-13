import React from "react";
import ReactDOM from "react-dom/client";
import App from './App'
const Appp = () => {
  return <div id="root">
    <App />
  </div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Appp />);
