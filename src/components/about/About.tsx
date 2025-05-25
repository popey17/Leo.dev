import React from 'react'
import SectionTitle from '../common/SectionTitle'
import AboutBgImg from './AboutBgImg'

const About = () => {

  return (
    <section className='about'>
      <div className="about__inner">
        <SectionTitle>
          About Me
        </SectionTitle>
        <section className="about__content">
          <div className="about__content__inner">
            <h3 className="about__content__title">
              Who am I
            </h3>
            <div className="about__content__content">
              <p>
                Hi, I'm <span>LEO</span> — a <span>Web Developer</span> who enjoys building beautiful, functional, and user-friendly websites. I focus on turning ideas into interactive digital experiences, whether it's a sleek landing page, a dynamic web app, or engaging web animations.
              </p>
              <p>
                I enjoy traveling and meeting new people — which make <span>"every corner of the world my workplace"</span>. When I’m not coding, you'll find me exploring new cultures and chasing fresh experiences.
              </p>
              <div>
                here lie scroller
              </div>
            </div>
          </div>
        </section>
        <AboutBgImg />
        <section className="about__content">
          <div className="about__content__inner">
            <h3 className="about__content__title">
              Education
            </h3>
            <div className="about__content__content">
              <p>
                Hi, I'm <span>LEO</span> — a <span>Web Developer</span> who enjoys building beautiful, functional, and user-friendly websites. I focus on turning ideas into interactive digital experiences, whether it's a sleek landing page, a dynamic web app, or engaging web animations.
              </p>
              <p>
                I enjoy traveling and meeting new people — which make <span>"every corner of the world my workplace"</span>. When I’m not coding, you'll find me exploring new cultures and chasing fresh experiences.
              </p>

            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default About