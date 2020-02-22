import React, {Component} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import './App.css';
import home from './components/homepage/homepage'
import Navigation from './components/Nav_bar/Nav_bar'
import Input from './components/Input_component/input_component'

// import logo from './assets/logo.jpg'
// import fire from '.components/config/firebase';

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
        <Navigation />
            <Switch>
              {/* //Watch switch statements */}
             <Route path="/" component={home} exact/>
             <Route path="/input" component={Input}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}

 export default App;