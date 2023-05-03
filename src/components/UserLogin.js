import React from 'react'

function UserLogin() {
    return(
        <>
            <section className="section">
                <h1 className="title">Entra para ver o hacer tus apuestas!</h1>
                <div className="block">
                <form className="box">
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
            </section>
        </>
    )
}

export default UserLogin