import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ScrollProgress = () => {
  const barRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(barRef.current, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: document.documentElement,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.2,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[60] bg-transparent pointer-events-none">
      <div
        ref={barRef}
        className="h-full bg-gradient-to-r from-primary via-teal-400 to-emerald-300 origin-left"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  )
}

export default ScrollProgress
