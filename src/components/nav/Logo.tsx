"use client"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { useGSAP } from '@gsap/react';
import { useRef } from "react"
const Logo = () => {
  const logo = useRef<HTMLAnchorElement>(null)

  gsap.registerPlugin(SplitText) 
  
  useGSAP(() => {
    let text = gsap.utils.toArray<HTMLSpanElement>(".right span")

    text.forEach((item) => {
      let split = SplitText.create(item, { type: "chars" });
      
      logo.current?.addEventListener("mouseover",()=>{
        gsap.to(split.chars,{
          yPercent: -100,
          duration: 0.5,
          stagger: 0.05,
        })
      })
      logo.current?.addEventListener("mouseout",()=>{
        gsap.to(split.chars,{
          yPercent: 0,
          duration: 0.5,
          stagger: 0.05,
        })
      })
    })



  })



  return (
    <a href='/' className="nav__logo" ref={logo}>
      <h1>
        <span className='left'>leo</span>
        <span className='dot'>.</span>
        <span className='right'>
          <span>dev</span>
          <span>core</span>
        </span>
      </h1>
    </a>
  )
}

export default Logo