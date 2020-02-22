import React, { Component } from 'react';
import { db } from '../config/firebase';

class home extends Component {

    componentDidMount() {
        db.collection('Parents').get().then(querySnapshot => {
            querySnapshot.forEach(doc => console.log(doc.data()))
        })
    }

    render() {
        return (
            <div>Home</div>
        )
    }
}

export default home