import React from "react";
import ReactDOM from "react-dom/client";
import Logs from "./Components/Logs/Logs";
import { Card } from "./Components/UI/Card/Card";
const App = () => {
  return (
    <div id="root">
      <Logs />
      <Card>嘻嘻嘻</Card>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
