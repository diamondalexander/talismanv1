import React from 'react'

const FooterMenu = props => (
    <div className="ui three item menu">
        <a className={props.item1} href="/first-page">Color</a>
        <a className={props.item2} href="/second-page">Shape</a>
        <a className={props.item3} href="/third-page">Stickers</a>
    </div>
);

export default FooterMenu