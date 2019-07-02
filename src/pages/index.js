import React from "react"
import { Link } from "gatsby"
import FirstScreen from '../components/FirstScreen'
import Title from '../components/Title'
import Index from '../components/Index.css'
import FooterMenu from '../components/Footer'
import global from '../components/global.css'


// import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
    <div className="container">
      <Title
        title="Talisman"
        // image={require('../images/gatsby-icon.png')}
      />
      <div className="content">
      <FirstScreen
        text="Let's begin!"
        image={require('../images/Grey.png')}
       />
      <button className="ui teal button singleButton"><Link to="/first-page/" className="whitetext">Get Started</Link></button>
    </div>
    </div>
);

export default IndexPage
