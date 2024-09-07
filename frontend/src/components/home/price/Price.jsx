import React from "react"
import Heading from "../../common/Heading"
import "./price.css"
import PriceCard from "./PriceCard"

const Price = () => {
  return (
    <>
      <section className='price padding'>
        <div className='container'>
          <Heading title='Select Your Package' subtitle='Choose the perfect plan for your needs. Whether you need basic features, the best value, or premium benefits, we have a package for you. Review the options below and select the one that suits your requirements' />
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Price
