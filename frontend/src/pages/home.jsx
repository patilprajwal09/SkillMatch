import React from 'react'
import Hero from "../components/hero.jsx";
import Footer from "../components/footer.jsx";

const home = () => {
  return (
    <div>
    <Hero/>
    <div className='p-4'>
some content
    </div>
    <Footer/>
    </div>
  )
}

export default home
