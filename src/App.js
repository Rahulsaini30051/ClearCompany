import { BrowserRouter, Switch, Route } from "react-router-dom";

import Hlsplayer from "./components/Hlsplayer";
import './App.css';

import Header from "./components/Header";
import Movies from "./components/Movies"

const App=()=>{
  return(
  <BrowserRouter>
  <Header/>
  <Switch>
  <Route exact path="/Hlsplayer" component={Hlsplayer} />  
  <Route exact path="/" component={Movies}  /> 
           </Switch>
    </BrowserRouter>
   
  );
}
export default App;

