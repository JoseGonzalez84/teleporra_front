import React from 'react'
import UserLogin from './UserLogin'
import UserRegister from './UserRegister'

const UserHandle = (params) => {
    if (params.action === 'login') {
        return(<UserLogin />)
    } else {
        return(<UserRegister />)
    }
}

export default UserHandle