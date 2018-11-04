import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Resume extends Component {
    render() { 
        return ( 
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                        <img
                          src='https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png'  
                          alt='avatar'
                          style={{height: '200px'}}
                          />                      
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Muneer Variawa</h2>
                        <h4 style={{color: 'grey'}}>Full Stack Developer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>Full Stack Developer, creating Custom, Bespoke Software solutions. Data Analyst, Python specialist with a burning passion for all things MERN Stack. Love creating in React! </p>                    
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>Cnr 4th Avenue & 4th Street, Killarney</p>
                        <h5>Phone</h5>
                        <p>082 566 2574</p>
                        <h5>Email</h5>
                        <p>muneer.variawa1@gmail.com</p>
                        <h5>Website</h5>
                        <p>Under Construction</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    <Cell className='resume-right-col' col={8}>
                        <h2>Education</h2>
                    </Cell>
                </Grid>
            </div>
         );
    }
}
 
export default Resume;