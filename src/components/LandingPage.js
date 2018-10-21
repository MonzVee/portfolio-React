import React, { Component } from 'react';
import { Grid , Cell } from 'react-mdl';
import avatar from '../images/monz.jpg';


class LandingPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div style = {{ width: '100%', margin: 'auto'}}>
            <Grid className = "landing-grid">
                <Cell col = {12}>
                <img src = {avatar} alt = "avatar" className = "avatar-img"/>
                </Cell>
            </Grid>
                <h1>About Me</h1>
            </div>
         );
    }
}
 
export default LandingPage;