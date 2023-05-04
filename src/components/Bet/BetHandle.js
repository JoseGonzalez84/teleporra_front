import React from 'react'
import { useParams } from 'react-router-dom';
import BetShow from './BetShow';

const BetHandle = () => {
    const { param } = useParams();

    switch (param) {
        case 'new':
            return(<>Nueva Apuesta</>)
        case 'list':
        case typeof undefined:
            return(<>Lista de apuestas</>)
        default:
            return(
                <BetShow />
            )
    }
}

export default BetHandle