"use client"
import ContactIcon from "./ContactIcon"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger, Flip } from "gsap/all";

gsap.registerPlugin(Flip, ScrollTrigger)


const Hero = () => {

  const contactRef = useRef<HTMLDivElement>(null)
  const contactContainerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const textElement = gsap.utils.toArray<HTMLDivElement>(".hero__text:not(.hero__text--note)");
    const noteElement = gsap.utils.toArray<HTMLDivElement>(".hero__text.hero__text--note");
    const topTextElement = gsap.utils.toArray<HTMLDivElement>(".hero__text.hero__text--top .hero__text__large");


    const tl = gsap.timeline();
    tl
      .to(textElement, {
        yPercent: -100,
        ease: "power2.inOut",
        duration: 1,
        opacity: 1,
        stagger: 0.2,
        filter: "blur(0px)",
      })
      .to(noteElement, {
        opacity: 1,
        xPercent: 20,
        filter: "blur(0px)",
      }, "-=0.5")
      .to(contactContainerRef.current, {
        width: "15vw",
        ease: "power2.inOut",
        duration: 1
      }, "<");
    const videoElement = contactRef.current?.querySelector("video");
    if (videoElement && window.scrollY < (window.innerHeight * 0.1)) {
      tl.to(videoElement, {
        width: "30vw",
        ease: "power2.inOut",
        duration: 1
      }, "<");
    }


    const originalParent = contactRef.current?.parentNode;
    const modContactFloat = document.querySelector(".modContactFloat");

    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "10% top",
      end: "bottom 80%",
      // markers: true,
      onEnter: () => {

        if (modContactFloat && contactRef.current?.parentNode !== modContactFloat) {
          const state = Flip.getState(contactRef.current);

          if (contactRef.current) {
            modContactFloat.appendChild(contactRef.current);
          }
          Flip.from(state, {
            duration: 1.5,
            ease: "power2.inOut",
            onStart: () => {
              gsap.to(".video__container video", {
                width: "130%",
                duration: 1
              })
              gsap.to(".modContactFloat", {
                visibility: "visible"
              })
            },
          });
        }
      },

      onLeaveBack: () => {
        if (originalParent && contactRef.current?.parentNode !== originalParent) {
          const state = Flip.getState(contactRef.current);

          if (contactRef.current) {
            originalParent.appendChild(contactRef.current);
          }
          Flip.from(state, {
            duration: 1.5,
            ease: "power2.inOut",
            onStart: () => {
              gsap.to(".video__container video", {
                width: "30vw",
                duration: 1
              })
              gsap.to(".modContactFloat", {
                visibility: "hidden"
              })
            }
          });
        }
      }
    });

  })


  return (
    <section className='hero' ref={heroRef}>
      <div className="hero__inner">
        <div className='hero__text hero__text--top'>
          <p className='hero__text__small'>Hello! I am a wandering <br />web developer from <br />Yangon, Myanmar.</p>
          <p className='hero__text__large'>WEB</p>
          <div className='hero__text__video' ref={contactContainerRef}>
            <div className="video__container" ref={contactRef}>
              <ContactIcon />
            </div>
          </div>
        </div>
        <div className='hero__text hero__text--mid'>
          <p className='hero__text__large'>DESIGN</p>
          <p className='hero__text__small'>Great web development starts where clean code meets clear design.</p>
        </div>
        <div className='hero__text hero__text--bot'>
          <h1 className='hero__text__large'>DEVELOP</h1>
        </div>
        <div className='hero__text hero__text--note'>
          <p className='hero__text__small'>I'm currently in <span>Bangkok, Th</span></p>
        </div>
        <a href="/contact" className='modContactFloat'>
        </a>
      </div>
    </section>

  )
}

export default Hero

