import React, {Component} from 'react';
import {DiceBagContext} from '../context/roll-context';
import {Button, Input, Label, Form} from 'reactstrap';

class DiceForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            numSides: 2
        }
    }
    handleInput = (event) => {
        event.preventDefault();
        this.setState({numSides: event.target.value})
    }
    render(){
        return(
            <DiceBagContext.Consumer>
                {({addToDice}) => (
                    <Form className="form">
                        <Label for="diceadd">Add new Die to collection:</Label>
                        <Input id="diceadd" type="number" onChange={this.handleInput}min="2"  
                                placeholder="Number of Sides"/>
                        <Button onClick={() => addToDice({numSides: this.state.numSides, currentRoll: 0})} 
                                color="primary" block>Add Die</Button>
                    </Form>
                )}
            </DiceBagContext.Consumer>
        )
    }
    
}
export default DiceForm;