import React from 'react'
import UserLogin from './UserLogin'
import UserRegister from './UserRegister'

const UserHandle = (params) => {
    let content;
    if (params.action === 'login') {
        content = <UserLogin />
    } else {
        content = <UserRegister />
    }

    return(
        <section className="section">
            {content}
        </section>
    )
}

export default UserHandle