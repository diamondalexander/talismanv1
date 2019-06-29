import React from "react"
import { Link } from "gatsby"
import FirstScreen from '../components/FirstScreen'
import Title from '../components/Title'
import Index from '../components/Index.css'
import FooterMenu from '../components/Footer'

// import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Second = () => (
    <div className="container">
      <Title
        title="Talisman"
        // image={require('../images/gatsby-icon.png')}
      />
      <div className="content">
      <FirstScreen
        text="Shape"
        image={require('../images/Shape.png')}
       />
       <FooterMenu 
        item1="item"
        item2="item active"
        item3="item"
      />
     {/* <button className="ui button"><Link to="/first-page">Back</Link></button> 
      <button className="ui teal button"><Link to="/third-page" className="whitetext">Next</Link></button> */}
    </div>
    </div>
);

export default Second
