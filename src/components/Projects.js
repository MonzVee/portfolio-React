import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle,CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }
    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                <div className='projects-grid'>
                {/*Project React */}
                <Card shadow={5}  style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(data:image/png;base64,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) center / cover'}}>React Project</CardTitle>
                    <CardText>
                        This is the first part of a project I am working on in order to further my React and all-round
                        development knowledge
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                
                        <Button colored>Live Demo</Button>

                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                      <IconButton name='share'/>                      
                    </CardMenu>
                </Card>
            
                {/*Project NodeJS */}
                <Card shadow={5}  style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS61JySOoPXlkw3MtRhTAyf_wLloRyO90yLpxHBMv9-IQioHxuKgg) center / cover'}}>NodeJS Project</CardTitle>
                    <CardText>
                        This is the first part of a project I am working on in order to further my React and all-round
                        development knowledge
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                
                        <Button colored>Live Demo</Button>

                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                      <IconButton name='share'/>                      
                    </CardMenu>
                </Card>
            
                {/*Project MonzTube */}
                <Card shadow={5}  style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWPSgKfMRjDeywfsZuZ4ilY-sLEcUQGE-BKM51xSAj3_6sW79srg) center / cover'}}>MonzTube Project</CardTitle>
                    <CardText>
                        This is the first part of a project I am working on in order to further my React and all-round
                        development knowledge
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                
                        <Button colored>Live Demo</Button>

                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                      <IconButton name='share'/>                      
                    </CardMenu>
                </Card>
                </div>
            

                 
            )
        } else if(this.state.activeTab === 1 ) {
            return (
                <div><h1>This is NodeJs</h1></div>
            )
        } else if(this.state.activeTab === 2) {
            return (
                <div><h1>This is Python</h1></div>
            )
        }else if(this.state.activeTab === 3){
            return (
                <div><h1>This is Vanilla</h1></div>
            )
        } else if(this.state.activeTab === 4) {
            return (
                <div><h1>This is Mongodb</h1></div>
            )
        } else if (this.state.activeTab === 5) {
            return (
                <div><h1>This is MonzTube</h1></div>
            )
            
        }

    }
    
    render() { 
        return ( 
            <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
            <Tab>React</Tab>
            <Tab>NodeJs</Tab>
            <Tab>Python</Tab>
            <Tab>Vanilla</Tab>
            <Tab>MongoDB</Tab>
            <Tab>MonzTube</Tab>
            </Tabs>

        
                <Grid>
                <Cell col={12}>
                    <div className='content'>{this.toggleCategories()}</div>
                </Cell>
                </Grid>
                
           
                
            </div>
         )
    }
}
 
export default Projects;