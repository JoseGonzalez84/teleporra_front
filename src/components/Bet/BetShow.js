import React from "react"
// Components.
import { TeamCaption, TeamScore } from "../General/ResultsComponents"

const BetShow = () => {

    return(
        <div className="score-row columns">
            <div className="column">
                <TeamCaption teamName="Atlético de Madrid"  localTeam={true} />
            </div>
            <div className="column">
                <TeamScore score="0" />
            </div>
            <div className="column">
                <TeamScore score="2" />
            </div>
            <div className="column">
                <TeamCaption teamName="Rayo Vallecano" />
            </div>
        </div>
    )
}

export default BetShow