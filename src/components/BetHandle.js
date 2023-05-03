import React from 'react'
import { useParams } from 'react-router-dom';

const BetHandle = (params) => {
    const { bet, id } = useParams();
    console.log(params)
    console.log(id)
    console.log(bet === 'undefined')
}

export default BetHandle