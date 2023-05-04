import React from "react"

const TeamScore = (data) => {
    return(
        <>
            <div className="box has-text-centered">
                <span className="big-size-text">{data.score}</span>
            </div>
        </>
    )
}

const TeamLogo = (data) => {
    if (data.visible === true) {
        return(
            <div className={data.position}>
                <figure className="image is-64x64">
                    <img src="https://bulma.io/images/placeholders/128x128.png" alt={data.logo} />
                </figure>
            </div>
        )
    } else {
        return(<></>)
    }
}

const TeamCaption = (data) => {

    let logoPosition, isVisitTeam

    if ((data.localTeam === true)) {
        logoPosition = 'media-left'
        isVisitTeam = false
    } else {
        logoPosition = 'media-right'
        isVisitTeam = true
    }

    return(
        <>
            <div className="box">
                <article className="media">
                    <TeamLogo logo="" position={logoPosition} visible={data.localTeam} />
                    <div className="media-content">
                        <div className="content">
                            <p>
                            <strong>{data.teamName}</strong>
                            <br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                            </p>
                        </div>
                    </div>
                    <TeamLogo logo="" position={logoPosition} visible={isVisitTeam} />
                </article>
            </div>
        </>
    )
}

export { TeamCaption, TeamScore }