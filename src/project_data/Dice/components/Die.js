import React from 'react';
import {Button} from 'reactstrap';
import {DiceBagContext} from '../context/roll-context';
import '../dice.css'

function Die({die, index}){
    return(
        <DiceBagContext.Consumer>
            {({rollOne}) => (
                <div className="Die">
                    <Button color="primary" id={index} onClick={() => rollOne(index)} block>Roll {die.numSides} Sided Die</Button>
                    Result: {die.currentRoll}
                </div>
            )}
        </DiceBagContext.Consumer>
    )
}
export default Die;