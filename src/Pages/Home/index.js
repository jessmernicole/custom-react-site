import React from 'react'

import homeAbout from '../../assets/images/home-about.jpg'

import './home.scss'

const Home = () => {
  return (
    <div className="home-container">
      <div>
        <img src={homeAbout} width={1000} alt="home-about image" />
      </div>

      <div>
        <p>I’m Jessmer Nicole Norteza - a licensed professional teacher and a freelance writer. I write website content, book reviews, business one-pagers, academic essays, and so on.</p>
      </div>

    </div>
  )
}

export default Home;