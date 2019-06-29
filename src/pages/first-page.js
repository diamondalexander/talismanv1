import React from "react"
import { Link } from "gatsby"
import FirstScreen from '../components/FirstScreen'
import Title from '../components/Title'
import Index from '../components/Index.css'

// import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import FooterMenu from "../components/Footer";

const IndexPage = () => (
    <div className="container">
      <Title
        title="Talisman"
      />
      <div className="content">
      <FirstScreen
        text="Color"
        image={require('../images/Blue.png')}
       />
      {/* <button className="ui button"><Link to="/">Start Over</Link></button> */}
      {/* <button className="ui teal button"><Link to="/second-page/" className="whitetext">Next</Link></button> */}
      <FooterMenu 
        item1="item active"
        item2="item"
        item3="item"
      />
    </div>
    </div>
);

export default IndexPage
