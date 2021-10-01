import Dashboard from "./containers/Dashboard/index"
import Signin from "./containers/Signin/index"
import Signup from "./containers/Signup/index"
import { BrowserRouter, Switch, Route } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/signin'} component={Signin} />
        <Route exact path={'/dashboard'} component={Dashboard} />
        <Route exact path={'/Signup'} component={Signup} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
