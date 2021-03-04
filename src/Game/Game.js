import React from "react"
import "./Game.scss"


export default class Game extends React.Component{
    render(){
        const {username} =this.props.location.state
        return(
            <div className="game-container">
                <p className="game-username">{username.toUpperCase()}</p>
            </div>
        )
    }
}