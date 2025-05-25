"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import { useRef } from "react"
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { SplitText } from "gsap/SplitText"

const SectionTitle = ({children}: {children: React.ReactNode}) => {

  const title = useRef<HTMLHeadingElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  
  
  useGSAP(()=> {
    const spans = title.current?.querySelectorAll("span");
    if (spans && spans.length > 0) {
      gsap.to(spans, {
        scrollTrigger: {
          trigger: title.current,
          start: "top 90%",
          end: "bottom 40%",
          scrub: 1,
          // markers: true,
          toggleActions: "play none none reverse"
        },
        ease: "power2.inOut",
        yPercent: -100,
        // duration: 1
      });
    }
  })

  return (
    <h2 className="modSectionTitle" ref={title}>
      <span>{children}</span>
      <span>{children}</span>
    </h2>
  )
}
``
export default SectionTitle