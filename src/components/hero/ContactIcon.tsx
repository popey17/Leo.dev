"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

const ContactIcon = () => {

  const contactTextRef = useRef<SVGSVGElement>(null)

  useGSAP(() => {
    let tl = gsap.timeline();
    tl
    .to(contactTextRef.current, {
      rotate: 360,
      repeat: -1,
      ease: "linear",
      duration: 5
    })
    
  })

  return (
    <>
      <svg width={150} height={150} viewBox="0 0 150 150"  ref={contactTextRef}>
        <path id="lineAC" d="
              M 15,75
              a 60,60 0 1,1 120,0
              a 60,60 0 1,1 -120,0
            " fill="none" stroke="none" />
        <text>
          <textPath href="#lineAC" startOffset="0%">
            Click here to say Hello!
          </textPath>
        </text>
        <text>
          <textPath href="#lineAC" startOffset="50%">
            Click here to say Hello!
          </textPath>
        </text>
      </svg>
      <video playsInline autoPlay loop muted>
        <source src="/video/video_character.mov" />
      </video>
    </>
  )
}

export default ContactIcon