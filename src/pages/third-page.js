import React from "react"
import { Link } from "gatsby"
import FirstScreen from '../components/FirstScreen'
import Title from '../components/Title'
import Index from '../components/Index.css'

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
        text="Sticker"
       />
      <Link to="/fourth-page/">Finish</Link><br/>
      <Link to="/second-page/">Back</Link>
    </div>
    </div>
);

export default Third
