"use client"
import React from 'react'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'
import imgAbout01 from "@/assets/image/img_about01.jpeg"
import imgAbout02 from "@/assets/image/img_about02.jpg"
import imgAbout03 from "@/assets/image/img_about03.jpeg"
import ScrollSmoother from 'gsap/src/ScrollSmoother'

const AboutBgImg = () => {

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  
  useGSAP(() => {
    const images = gsap.utils.toArray<HTMLDivElement>(".image");

    ScrollSmoother.create({
      content: ".about__content",
      smooth: 1,
    })

    images.forEach((image, i) => {
      let speed = -350

      if (i === 2) {
        speed = -400
      } else if (i === 1) {
        speed = -280
      }

      gsap.to(image, {
        scrollTrigger: {
          trigger: ".about__content__imgWrapper",
          start: "top 70%",
          end: "bottom 60%",
          scrub: 1,
          // markers: true,
          toggleActions: "play none none reverse"
        },
        ease: "power2.inOut",
        yPercent: speed,
      })
      
    })
  })
  
  
  return (
    <div className='about__content__imgWrapper'>
      <figure className='image'>
        <Image src={imgAbout01} alt="" width={640} height={420} />
      </figure>
      <figure className='image'>
        <Image src={imgAbout02} alt="" width={640} height={775} />
      </figure>
      <figure className='image'>
        <Image src={imgAbout03} alt="" width={640} height={1084} />
      </figure>
    </div>
  )
}

export default AboutBgImg