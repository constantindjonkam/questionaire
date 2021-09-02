import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import ScrollToTop from "./components/ScrollToTop";
import Question from "./pages/Question";
import Result from "./pages/Result";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/result/:id" component={Result} />
          <Route path="/" component={Question} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
