import Logs from "./Components/Logs/Logs";
import { Card } from "./Components/UI/Card/Card";
import LogsForm from "./Components/LogsForm/LogsForm";
import "./App.css";

const App = () => {
  return (
    <div id="app">
      <LogsForm />
      <Logs />
      <Card>嘻嘻嘻</Card>
    </div>
  );
};
export default App;
