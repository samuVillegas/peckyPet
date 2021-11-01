import Index from "./containers/Dashboard/index"
import Posts from "./containers/Dashboard/posts";
import Signin from "./containers/Signin/index"
import Signup from "./containers/Signup/index"
import { BrowserRouter, Switch, Route } from "react-router-dom";
​
​
​
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/signin'} component={Signin} />
        <Route exact path={'/dashboard/index'} component={Index} />
        <Route exact path={'/dashboard/posts'} component={Posts} />
        <Route exact path={'/Signup'} component={Signup} />
      </Switch>
    </BrowserRouter>
  );
}
​
export default App;