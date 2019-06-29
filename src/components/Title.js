import React from 'react'

const Title = props => (
    <div className="header-bar">
        <div className="logoSection">
        <a href="/" className="logo">{props.title}</a>
        {/* <Link className="logo">{props.title}</Link> */}
        {/* <img src={props.image} className="icon"/> */}
    </div>
    </div>
);

export default Title;