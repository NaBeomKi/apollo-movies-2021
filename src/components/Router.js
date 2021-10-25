import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "../routes/Detail";
import Home from "../routes/Home";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:id" component={Detail} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
