import React, { Component } from 'react';
// import { db } from '../config/firebase';
//  import ReactDOM from 'react';
import {Button} from 'react-bootstrap'



class home extends Component {

 

    // constructor() {
    //     super();
    //     this.state = {
    //         Child_Age:"",
    //         Child_Name: "",
    //         Email: "",           
    //         First_name:"",
    //         Last_name:""
    //     };
    //   }

    //   updateInput = e => {
    //     this.setState({
    //       [e.target.name]: e.target.value
    //     });
    //   }

    //   getUserData = () =>{
    //       let ref = db.ref('/');
    //       ref.on('value',snapshot => {
    //         const state = snapshot.val();
    //         this.setState(state);
    //       });
    //       console.log('DATA RETRIEVED');
    //   }

    // componentDidMount() {
    //     // this.getUserData();
    //     db.collection('Parents').get().then(querySnapshot => {
    //         querySnapshot.forEach(function(doc) {
    //             this.snapshotToArray(doc)
    //         });
    //     })
    // }

    // componentDidMount() {
    //     db.ref('/posts').on('Parents', function(snapshot) {
    //         console.log(this.snapshotToArray(snapshot));
    //     });
    // }

    //  snapshotToArray = (snapshot) => {
    //     var returnArr = [];
    
    //     snapshot.forEach(function(childSnapshot) {
    //         var item = childSnapshot.val();
    //         item.key = childSnapshot.key;
    
    //         returnArr.push(item);
    //     });
    
    //     return returnArr;
    // };

    // display_name() => {
    //     ReactDOM.render(document.getElementById("kids_name"))}
    
       
    

    render() {
        return (
         <div id = "kids_name">
        <Button bsStyle="primary">Primary</Button>
        </div>
        )

    }
}

export default home