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
      />
      <div className="content">
      <FirstScreen
        text="All done!"
        image={require('../images/Final.png')}
       />
      <button className="ui teal button singleButton"><Link to="/" className="whitetext">Home</Link></button>
    </div>
    </div>
);

export default Fourth
