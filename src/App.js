import React, {Component} from 'react';
import './App.css';
// import test_picture from './assets'
// import fire from '.components/config/firebase';

class App extends Component {
  
  
  render() {
    return (
       <form >
        <input 
          type="text"
          name="fullname"
          placeholder="Full name"
          // value={this.state.fullname}
          // onChange={this.updateInput}
          
        />
        <br/>
        <label>
          Email:
        <input
          type="email"
          name="email"
          placeholder="Email"
          // value={this.state.email}
          // onChange={this.updateInput}
        />
        </label>
         <br/>
        <input
        type="password"
        name="password"
        placeholder="password"
        />
         <br/>
        <button type="submit">Submit</button>
      </form>
      );
}
}

 export default App;