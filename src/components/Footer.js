import React from 'react';

const Footer = () => {
    const CODE_HOSTED_URL = "https://github.com/JoseGonzalez84/"
    return(
        <>
            <footer className='footer'>
                <div className='content has-text-centered'>
                    <p>
                        <strong>Teleporra</strong>, proudly created in 2023 by <a href={CODE_HOSTED_URL}>Jose González</a>, collaborator of <strong>The Nutsy Company</strong>
                    </p>
                    <p>
                        Code hosted in <a href={CODE_HOSTED_URL + "teleporra_front"}>GitHub</a>.
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer