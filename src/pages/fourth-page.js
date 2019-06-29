import React from "react"
import { Link } from "gatsby"
import FirstScreen from '../components/FirstScreen'
import Title from '../components/Title'
import Index from '../components/Index.css'

// import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Fourth = () => (
    <div className="container">
      <Title
        title="Talisman"
        // image={require('../images/gatsby-icon.png')}
      />
      <div className="content">
      <FirstScreen
        text="Last page"
       />
      <Link to="/">Return to home</Link><br/>
      <Link to="/third-page/">Back</Link>
    </div>
    </div>
);

export default Fourth
