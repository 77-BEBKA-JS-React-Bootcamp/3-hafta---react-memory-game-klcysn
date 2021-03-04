import React from "react"
import "./Game.scss"



export default class Game extends React.Component{
    state = {
        index: [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5]
    }
    componentDidMount(){
        this.setState({index: this.state.index.sort((a,b)=> 0.5 - Math.random())})
    }
    render(){
        const {username} =this.props.location.state
        return(
            <div className="game-container">
                <p className="game-username">{username.toUpperCase()}</p>
                <div className="cards-container">
                    {this.state.index.map((i, indx)=><img src="/assets/back.png" alt="" width="170vw" height="auto" />)}
                </div>
            </div>
        )
    }
}