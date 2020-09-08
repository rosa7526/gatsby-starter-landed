import React from 'react'
import pic01 from '../assets/images/pic01.jpg'
import { Link as ScrollLink } from 'react-scroll'

const Banner = props => (
  <section id="banner">
    <div className="content">
      <header>
        <h2>Rosa Lin</h2>
        <p>
          Born in Taiwan ,Tainan in 1994.
          <br />
          Moved to Osaka, Japan in 2019.<br />Keep going on her career as a designer.
        </p>
      </header>
      <span className="image">
        <img src={pic01} alt="intro" />
      </span>
    </div>
    <ScrollLink
      to="one"
      className="goto-next"
      activeClass="active"
      smooth={true}
      offset={50}
      duration={1500}
      spy={true}
    >
      Next
    </ScrollLink>
  </section>
)

export default Banner
