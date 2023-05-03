import React from 'react';
function Header() {
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
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                        Apuestas
                        </a>

                        <div class="navbar-dropdown">
                        <a class="navbar-item" href='bets/new'>
                            Nueva
                        </a>
                        <a class="navbar-item" href='bets/list'>
                            Lista
                        </a>
                        <hr class="navbar-divider" />
                        <a class="navbar-item" href='contact'>
                            Informar de un problema
                        </a>
                        </div>
                    </div>

                    <a className="navbar-item" href='bets'>
                        Información
                    </a>

                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-primary" href='register'>
                                <strong>Registro</strong>
                            </a>
                            <a className="button is-light" href="login">
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