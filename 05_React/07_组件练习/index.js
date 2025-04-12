import React from "react";
import ReactDOM from 'react-dom/client';
import Logs from "./Components/Logs/Logs";
const App = () => {
  return <div id="root">
    <Logs/>
  </div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);