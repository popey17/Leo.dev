"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'
import imgAbout01 from "@/assets/image/img_about01.jpg"
import imgAbout02 from "@/assets/image/img_about02.jpg"
import imgAbout03 from "@/assets/image/img_about03.jpg"

const AboutBgImg = () => {
  const imgWrapperRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);


  useGSAP(() => {
    const images = gsap.utils.toArray<HTMLDivElement>(".image");

    images.forEach((image, i) => {
      let speed = -80

      if (i === 2) {
        speed = -100
      } else if (i === 1) {
        speed = -80
      }

      image.addEventListener('mouseenter', () => {
        gsap.to(image, {
          ease: "power1.inOut",
          filter: "grayscale(0)",
        })
      });

      image.addEventListener('mouseleave', () => {
        gsap.to(image, {
          ease: "power1.inOut",
          filter: "grayscale(1)",
        })
      });

      gsap.to(image, {
        scrollTrigger: {
          trigger: ".about__content__imgWrapper",
          start: "top-=200 bottom",
          end: "top 20%",
          scrub: 1,
          // markers: true,
          toggleActions: "play none none reverse"
        },
        ease: "power2.inOut",
        yPercent: speed,
        // opacity: 1,
        // duration: 2
      })

    })

  })


  return (
    <div className='about__content__imgWrapper' ref={imgWrapperRef}>
      <figure className='image'>
        <Image src={imgAbout01} alt="" width={640} height={420} />
      </figure>
      <figure className='image'>
        <Image src={imgAbout03} alt="" width={640} height={1084} />
      </figure>
      <figure className='image'>
        <Image src={imgAbout02} alt="" width={640} height={775} />
      </figure>

    </div>
  )
}

export default AboutBgImg