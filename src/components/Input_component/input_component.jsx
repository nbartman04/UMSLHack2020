import React, {Component} from 'react';

// import fire from '.components/config/firebase';

class Input extends Component {
  
  
  render() {
    return (
       <form >
        
        <br/>
      

      <div>


        <p>Hello    </p>
      </div>


        <label>
          Journal Entry
        <input
          type="email"
          name="email"
          placeholder="What's on your mind?"
          // value={this.state.email}
          // onChange={this.updateInput}
        />
        </label>
        
         <br/>

       
         <br/>
        <button type="submit">Submit</button>
      </form>
      );
}
}

 export default Input;