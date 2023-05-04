import React from 'react'

const UserRegister = () => {
    return(
        <>
            <div className="block columns is-mobile">
                <div className="block column is-half is-offset-one-quarter">
                    <h1 className="title has-text-centered">Creemos un usuario nuevo!</h1>
                    <h3 className="has-text-centered">Debes tener 18 años o más para registrarte. Recuerda que nunca te pediremos dinero. Juega por diversión.</h3>
                </div>
            </div>
            <div className="block columns is-mobile">
                <form className="box column is-half is-offset-one-quarter">
                    <div className="field">
                        <label className="label">Nombre o apodo</label>
                        <div className="control">
                        <input className="input" type="text" placeholder="Pepito Verbenas" />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                        <input className="input" type="email" placeholder="e.g. alex@example.com" />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Contraseña</label>
                        <div className="control">
                        <input className="input" type="password" placeholder="********" />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Confirma contraseña</label>
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

export default UserRegister