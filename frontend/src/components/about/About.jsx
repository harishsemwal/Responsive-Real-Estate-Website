import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>Uphelder Properties stands as a beacon of excellence in the realm of real estate, offering unparalleled service and expertise to clients seeking their dream properties or lucrative investment opportunities. With a steadfast commitment to integrity and professionalism, Uphelder Properties meticulously curates a portfolio of diverse listings, each embodying quality craftsmanship, prime locations, and exceptional value.</p>
            <p>At Uphelder Properties, we understand that real estate transactions are not merely transactions but pivotal milestones in our clients' lives, and we are honored to be entrusted with such significant endeavors.</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
