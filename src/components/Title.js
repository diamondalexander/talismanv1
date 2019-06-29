import React from 'react'

const Title = props => (
    <div className="header-bar">
        <p className="logo">{props.title}</p>
        {/* <img src={props.image} className="icon"/> */}
    </div>
);

export default Title;