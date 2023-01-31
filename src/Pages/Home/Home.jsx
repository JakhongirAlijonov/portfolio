import React from 'react'
import { Link } from 'react-router-dom'
import Letters from '../../Components/Letters/Letters'
import './Style.css'

function Home() {
  return (
    <div className='home'>
<section className="hero-section">
<Letters title={"Hi, I'm Jakhongir, Web developer"} />
      <p className="home-subtitle">Frontend developer | Teacher</p>
<button class="button-92" role="button">Contact me</button>
<div class="stars">
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
</div>

</section>
<section className="home-portfolio">
  <Letters title={"My portfolio"} className="home-port-title" />
  <p className="home-portfolio-info">
  These are the projects I have chosen from among those created by me. This is still a drop from the sea. Projects created while learning and serves to demonstrate my programming skills.
Are you interested in seeing these things? You can see <Link to="/work"> here</Link>
  </p>
</section>
    </div>
  )
}

export default Home
