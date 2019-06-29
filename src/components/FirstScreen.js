import React from 'react'

const FirstScreen = props => (
    <div>
        <div className="top-links">
            <a href="/fourth-page" className="finish-link">{props.finish}</a>
        </div>
        <p className="heading">{props.text}</p>
        <img src={props.image} className="blob"/>
    </div>
)

export default FirstScreen;