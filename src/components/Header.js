import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href='/'>
                <h1>Teleporra</h1>
                </a>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" href='/'>
                    <span aria-hidden="true">Apuestas</span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                        Apuestas
                        </a>

                        <div className="navbar-dropdown">
                        <a className="navbar-item" href='/bet/new'>
                            Nueva
                        </a>
                        <a className="navbar-item" href='/bet/list'>
                            Lista
                        </a>
                        <hr className="navbar-divider" />
                        <a className="navbar-item" href='/bet/1984'>
                            Apuesta 1984
                        </a>
                        </div>
                    </div>

                    <a className="navbar-item" href='/about'>
                        Información
                    </a>

                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-primary" href='/register'>
                                <strong>Registro</strong>
                            </a>
                            <a className="button is-light" href="/login">
                                Entrar
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header