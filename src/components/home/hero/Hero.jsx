import React from "react"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        
          <div className="container">
          <h1 className="text-center ">Search Your Next Home</h1>
          <h5 className="text-center text-light"> Find new & featured property located in your local city.</h5>

          <form className='flex'>
            <div className='box'>
              <span>City/Street</span>
              <input type='text' placeholder='Location' />
            </div>
            <div className='box'>
              <span>Property Type</span>
              <input type='text' placeholder='Property Type' />
            </div>
            <div className='box'>
              <span>Price Range</span>
              <input type='text' placeholder='Price Range' />
            </div>
          
            <button className='btn1'>
              <i className='fa fa-search'></i>
            </button>
          </form>
          </div>
       
      </section>
    </>
  )
}

export default Hero
