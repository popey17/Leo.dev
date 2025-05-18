import React from 'react'

const Hero = () => {
  return (
    <section className='hero'>
      <div className="hero__inner">
        <div className='hero__text hero__text--top'>
          <p className='hero__text__small'>I am a wandering web developer from Yangon, Myanmar.</p>
          <p className='hero__text__large'>WEB</p>
        </div>
        <div className='hero__text hero__text--mid'>
          <p className='hero__text__large'>DESIGN</p>
          <p className='hero__text__small'>Great web development starts where clean code meets clear design.</p>
        </div>
        <div className='hero__text hero__text--bot'>
          <p className='hero__text__large'>DEVELOP</p>
        </div>

      </div>
    </section>
  )
}

export default Hero