import Index from "./containers/Dashboard/index"
import Posts from "./containers/Dashboard/posts"
import Signin from "./containers/Signin/index"
import Signup from "./containers/Signup/index"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useEffect } from "react";


function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from={`/`} to={`/signin`}/>
        <Route exact path={'/signin'} render={()=>{
          return sessionStorage.getItem('userId')?<Redirect to='/dashboard/index'/>:<Signin/>
        }} />
        <Route exact path={'/dashboard/index'} render={()=>{
          return sessionStorage.getItem('userId')?<Index/>:<Redirect to='/signin'/>
        }} />
        <Route exact path={'/dashboard/posts'} render={()=>{
          return sessionStorage.getItem('userId')?<Posts/>:<Redirect to='/signin'/>
        }} />
        <Route exact path={'/Signup'} render={()=>{
          return sessionStorage.getItem('userId')?<Redirect to='/dashboard/index'/>:<Signup/>
        }} />
      </Switch>
    </BrowserRouter>
  );
}


export default App;
