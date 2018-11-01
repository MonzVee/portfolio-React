import React, { Component } from 'react';
import { Grid , Cell } from 'react-mdl';
import avatar from '../images/face.jpg';


class LandingPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div style = {{ width: '100%', margin: 'auto'}}>
            <Grid className = "landing-grid">
                <Cell col = {12}>
                <img src = {avatar} alt = "avatar" className = "avatar-img"/>

                <div className = "banner-text">
                <h1>Full Stack Developer</h1>
                <hr />
                <p>
                    HTML/CSS | Bootstrap | JavaScript | React | NodeJs | Express |
                    MongoDB | Phyton | Django

                </p>
                <div className ="social-links">
                {/*LinkedIn */}
                <a
                    href = "https://www.google.com"
                    rel="noopener noreferrer"
                    target = "_blank">
                    <i className= "fa fa-linkedin-square" aria-hidden = "true" />
                    </a>
                {/*GitHub */}
                <a
                    href = "https://www.google.com"
                    rel="noopener noreferrer"
                    target = "_blank"
                    >
                    <i className= "fa fa-github-square" aria-hidden = "true" />
                    </a>
                {/*FreeCodeCamp */}
                <a
                    href = "https://www.google.com"
                    rel="noopener noreferrer"
                    target = "_blank"
                    >
                    <i className= "fa fa-free-code-camp" aria-hidden = "true" />
                    </a>
                {/*YouTube */}
                <a
                    href = "https://www.google.com"
                    rel="noopener noreferrer"
                    target = "_blank"
                    >
                    <i className= "fa fa-youtube-square" aria-hidden = "true" />
                    </a>        
                </div>
                </div>
                </Cell>
            </Grid>
            </div>
         );
    }
}
 
export default LandingPage;