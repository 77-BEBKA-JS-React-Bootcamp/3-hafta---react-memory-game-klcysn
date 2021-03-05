import React from "react"
import "./Game.scss"
import Card from "../components/Card/Card"



export default class Game extends React.Component{
    state = {
        index: [ 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6],
        openedCards: [],
        firstCard: false,
        secondCard: false,
        rights: 20
      
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
        this.setState({rights: this.state.rights - 1})
    }

    handleAgainButtonClick =(username)=> document.location.reload()
    render(){
        const {username} =this.props.location.state
        console.log(this.state.openedCards)
        return(
            <div className="game-container">
                <p className="game-username">{username.toUpperCase()} <br/> You have {this.state.rights} rights</p>
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
                {(this.state.openedCards.length === 6 || this.state.rights === 0)
                &&
                <div className="snackbar-container">
                    <div className="snackbar">
                        {this.state.openedCards.length === 6 && <p className="snackbar-text">You Won <b>{username}</b></p>}
                        {(this.state.rights === 0 && this.state.openedCards.length !== 6) && <p className="snackbar-text">You Lost <b>{username}</b></p>}
                        <p className="snackbar-text">Let's play again!</p>
                        <button onClick={()=>this.handleAgainButtonClick(username)} className="snackbar-button">again</button>
                    </div>
                </div>}
            </div>
        )
    }
}