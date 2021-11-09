import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/css/main.css";
import Footer from "./components/Footer.js";
import ContextProvider from "./contexts/ContextProvider.js";
import Home from "./pages/Home.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login.js";

function App() {
  return (
    <ContextProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </ContextProvider>
  );
}

export default App;
