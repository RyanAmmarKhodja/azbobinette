import logo from "./logo.svg";
import "./App.css";
import Animal from "./components/Animal";
import Login from "./pages/Login";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <AppRouter />
    

  );
}

export default App;
