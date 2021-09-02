import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import Question from "./pages/Question";
import Result from "./pages/Result";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/result" component={Result} />
          <Route path="/" component={Question} />
          <Route />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
