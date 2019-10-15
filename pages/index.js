import React, { Component } from 'react';
import AuthPage from '../pages/auth.js';

class Index extends Component{
    constructor(props)
    {
        super(props);
    }
    render(){
        return(
            <AuthPage />
        );
    }
}

export default Index;
