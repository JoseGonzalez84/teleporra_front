import React from 'react'
import { useParams } from 'react-router-dom';

const BetHandle = () => {
    const { param } = useParams();
    console.log(param)
    switch (param) {
        case 'new':
            return(<>Nueva Apuesta</>)
        case 'list':
        case typeof undefined:
            return(<>Lista de apuestas</>)
        default:
            return(<>Apuesta numero {param}</>)
    }
}

export default BetHandle