import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import PropertyPage from "./PropertyPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    //BEM
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/properties">
            <PropertyPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
