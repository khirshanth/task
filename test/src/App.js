import React,{useState,useEffect} from "react"
import './App.css';
import {BrowserRouter,Route,Switch} from "react-router-dom"
// import auth from "../../../server/client/auth"
// import home from "../../../server/client/home"
import Task from "./components/task"

export const credentialValue = React.createContext()
const   App = () => {
    const credentials = useState("hello")
    console.log(credentials,"name")
  return (
    <div className="App">
      {/* <credentialValue.Provider value={credentials}>
       <BrowserRouter>
          <Switch>
              <Route  exact path="/" component={home}/>
              <Route path="/register" component={auth}/>
         </Switch>
       

       </BrowserRouter>
       </credentialValue.Provider> */}

       <Task/>
    </div>
  );
}

export default App;



