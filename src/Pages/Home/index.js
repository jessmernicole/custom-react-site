import React from 'react'

import about from '../../assets/images/about.png'
import portfolio from '../../assets/images/portfolio.svg'
import exemplar from '../../assets/images/exemplar.svg'
import './home.scss'

const Home = () => {
  return (
    <div className="image-links">
      <img src={about} alt="about-me-link"/>
      <img src={portfolio} alt="portfolio-link" style={{ width: 80 }} />
      <img src={exemplar} alt="exemplar-link" style={{ width: 80 }} />
    </div>
  )
}

export default Home;