import React, {Component} from 'react';

// import fire from '.components/config/firebase';

class Input extends Component {
  
  
  render() {
    return (


       <form onSubmit>
        <input 
          type="textbox"
          name="fullname"
          placeholder="Full name"
          // value={this.state.fullname}
          // onChange={this.updateInput}
          
        />
        <br/>
        
        <input
          type="email"
          name="email"
          placeholder="What's on your mind?"
          // value={this.state.email}
          // onChange={this.updateInput}
        />
        
        
         <br/>

       
         <br/>
        <button type="submit">Submit</button>
      </form>
      );
}
}

 export default Input;