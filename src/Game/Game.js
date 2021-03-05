import React from "react"
import "./Game.scss"
import Card from "../components/Card/Card"



export default class Game extends React.Component{
    state = {
        index: [ 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6],
        openedCards: [],
        firstCard: false,
        secondCard: false,
        isOpened: false
    }
    componentDidMount(){
        this.setState({index: this.state.index.sort((a,b)=> 0.5 - Math.random())})
    }
    handleClick =(indx, i) => {
        if(!this.state.firstCard){
            this.setState({firstCard: [indx, i]})
        }else if(this.state.firstCard && !this.state.secondCard){
            this.setState({secondCard: [indx, i]})
            if(this.state.firstCard[1] === i){
                this.setState({openedCards:[...this.state.openedCards, i]})
                this.setState({firstCard: false, secondCard: false})
            }else if(this.state.firstCard[1] !== i){
                setTimeout(()=>this.setState({firstCard: false, secondCard: false}), 800)
                
            }
        }
        console.log(this.state.firstCard)
        console.log(this.state.secondCard)
        // this.setState({isOpened:`/assets/${i}.png`})
    }
    render(){
        const {username} =this.props.location.state
        console.log(this.state.openedCards)
        return(
            <div className="game-container">
                <p className="game-username">{username.toUpperCase()}</p>
                <div className="cards-container">
                    {this.state.index.map((i, indx)=>
                    this.state.openedCards.includes(i)
                    ?
                    <Card key={indx} src={`/assets/${i}.png`}/>
                    :
                    <Card onClick={()=>this.state.firstCard[0] === indx ? null : this.handleClick(indx, i)}
                    key={indx}
                    src={this.state.firstCard[0] === indx || this.state.secondCard[0] === indx ? `/assets/${i}.png` : "/assets/back.png"}/>)}
                </div>
                <div className="snackbar-container">
                    <div className="snackbar">
                        <p className="snackbar-text">You Lost <b>{username}</b></p>
                        <p className="snackbar-text">Let's play again!</p>
                        <button className="snackbar-button">again</button>
                    </div>
                </div>
            </div>
        )
    }
}