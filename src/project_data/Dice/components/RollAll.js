import React from 'react';
import {DiceBagContext} from "../context/roll-context"
import {Button} from 'reactstrap';

function RollAll(){
    return(
        <DiceBagContext.Consumer>
            {({ rollAll}) => (
                <Button className="rollall" color ="primary" onClick={rollAll} block>Roll All Dice</Button>
            )}
        </DiceBagContext.Consumer>
    )
}

export default RollAll