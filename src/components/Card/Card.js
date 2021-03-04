import React from "react"
import "./Card.scss"

export default class Card extends React.Component{

    render(props){
        return(
            <img onClick={this.props.onClick} className="card-image" src={this.props.src} alt="" />
        )
    }
}