import React from "react"
import { Link } from "gatsby"
import FirstScreen from '../components/FirstScreen'
import Title from '../components/Title'
import Index from '../components/Index.css'
import FooterMenu from '../components/Footer'

// import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Third = () => (
    <div className="container">
      <Title
        title="Talisman"
        // image={require('../images/gatsby-icon.png')}
      />
      <div className="content">
      <FirstScreen
        finish="finish"
        text="Sticker"
        image={require('../images/Final.png')}
       />
       <FooterMenu 
        item1="item"
        item2="item"
        item3="item active"
      />
      {/* <button className="ui button"><Link to="/second-page/">Back</Link></button>
      <button className="ui teal button"><Link to="/fourth-page/" className="whitetext">Finish</Link></button> */}
    </div>
    </div>
);

export default Third
