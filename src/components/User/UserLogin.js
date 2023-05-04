import React from 'react'

function UserLogin() {
    return(
        <>
            <div className="block columns is-mobile">
                <h1 className="title has-text-centered column is-half is-offset-one-quarter">Entra para ver o hacer tus apuestas!</h1>
            </div>
            <div className="block columns is-mobile">
                <form className="box column is-half is-offset-one-quarter">
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                        <input className="input" type="email" placeholder="e.g. alex@example.com" />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                        <input className="input" type="password" placeholder="********" />
                        </div>
                    </div>

                    <button className="button is-primary">Sign in</button>
                </form>
            </div>
        </>
    )
}

export default UserLogin