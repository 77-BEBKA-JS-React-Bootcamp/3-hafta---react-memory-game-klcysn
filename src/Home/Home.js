import React from "react"
import "./Home.scss"


class Home extends React.Component{
    state={
        username:"",
        usernamePicker: false
    }
    handleStartButtonClick = ()=> this.setState({usernamePicker: true})
    handleInputChange = (event) => this.setState({username: event.target.value})
    handleOkButtonClick = () =>this.state.username === "" ? null : this.props.history.push({pathname:"/game", state:{username:this.state.username}})
    render(){
        return(
            <div className="home-container" >
                <button onClick={this.handleStartButtonClick} className="start-button">Start Game</button>
                {this.state.usernamePicker
                &&
                <div className="username-picker">
                    <input className="username-input" maxLength={20} placeholder="User Name" onChange={this.handleInputChange}/>
                    <button className="ok-button" onClick={this.handleOkButtonClick}>OK</button>
                </div>}
            </div>
        )
    }
}

export default Home