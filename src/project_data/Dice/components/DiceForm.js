import React, {Component} from 'react';
import {DiceBagContext} from '../context/roll-context';
import {Button} from 'reactstrap';

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
                    <div>
                        Add new Die to collection:
                        <input type="number" onChange={this.handleInput}min="2"/>
                        <Button onClick={() => addToDice({numSides: this.state.numSides, currentRoll: 0})} 
                                color="primary">Add Die</Button>
                    </div>
                )}
            </DiceBagContext.Consumer>
        )
    }
    
}
export default DiceForm;