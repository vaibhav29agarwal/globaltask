import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import {connect} from 'react-redux'
import Form from './component/Form';
import Context from './component/Context';

function App() {
  return (
    <div className="App">

 <BrowserRouter>
 <div>
 <Route path="/" component={Form} exact/>
 <Route path="/Context" component={Context}/>
 </div>
 </BrowserRouter>  
     
    </div>
  );
}

function mapStateToProps(state){
  return{
    mainlist: state.employelist
  }
}

function mapDispatchToProps(dispatch){
  return{
    setUser:(userObj) =>{
      dispatch({type:"ADD_EMPLOYEE", payload:userObj})
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)

