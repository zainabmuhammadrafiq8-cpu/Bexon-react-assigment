import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null)
  const progressBarRef = useRef(null)
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    const counter = { val: 0 }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete()
        },
      })

      tl.from('.loader-emblem', {
        scale: 0.5,
        rotation: -20,
        opacity: 0,
        duration: 0.55,
        ease: 'back.out(1.8)',
      })
        .from(
          '.loader-title-char',
          {
            y: 25,
            opacity: 0,
            duration: 0.4,
            stagger: 0.05,
            ease: 'power3.out',
          },
          '-=0.3'
        )
        .from(
          '.loader-sub',
          {
            opacity: 0,
            y: 10,
            duration: 0.35,
          },
          '-=0.2'
        )
        .to(
          counter,
          {
            val: 100,
            duration: 1.55,
            ease: 'power2.inOut',
            onUpdate: () => {
              setPercent(Math.round(counter.val))
            },
          },
          '-=0.1'
        )
        .to(
          progressBarRef.current,
          {
            width: '100%',
            duration: 1.55,
            ease: 'power2.inOut',
          },
          '<'
        )
        .to('.loader-center', {
          scale: 0.92,
          opacity: 0,
          duration: 0.35,
          ease: 'power2.in',
        })
        .to(
          '.curtain-top',
          {
            yPercent: -100,
            duration: 0.75,
            ease: 'power4.inOut',
          },
          '-=0.05'
        )
        .to(
          '.curtain-bottom',
          {
            yPercent: 100,
            duration: 0.75,
            ease: 'power4.inOut',
          },
          '<'
        )
    }, containerRef)

    return () => ctx.revert()
  }, [onComplete])

  const brandLetters = ['B', 'e', 'x', 'o', 'n']

  return (
    <div ref={containerRef} className="fixed inset-0 z-[9999] pointer-events-auto">
      <div className="curtain-top fixed top-0 left-0 right-0 h-1/2 bg-darkBg border-b border-white/5" />
      <div className="curtain-bottom fixed bottom-0 left-0 right-0 h-1/2 bg-darkBg border-t border-white/5" />

      <div className="loader-center relative z-10 h-full flex flex-col items-center justify-center text-white px-6">
        <div className="loader-emblem relative mb-6 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full border border-dashed border-primary/50 animate-spin-slow absolute" />
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-teal-500 flex items-center justify-center text-white font-extrabold text-3xl shadow-2xl shadow-primary/40">
            B
          </div>
        </div>

        <div className="flex items-center justify-center text-4xl font-extrabold tracking-tight mb-1.5">
          {brandLetters.map((char, idx) => (
            <span key={idx} className="loader-title-char inline-block">
              {char}
            </span>
          ))}
          <span className="loader-title-char inline-block text-primary ml-1">Pro.</span>
        </div>

        <p className="loader-sub text-xs uppercase tracking-[0.28em] text-slate-400 mb-8">
          Global Strategy & Advisory
        </p>

        <div className="w-full max-w-xs h-1.5 bg-white/10 rounded-full overflow-hidden mb-3">
          <div
            ref={progressBarRef}
            className="h-full bg-gradient-to-r from-primary via-teal-400 to-emerald-300 rounded-full"
            style={{ width: '0%' }}
          />
        </div>

        <div className="w-full max-w-xs flex items-center justify-between text-xs font-semibold text-slate-400">
          <span>Initializing Workspace</span>
          <span className="text-teal-300 font-bold tabular-nums">{percent}%</span>
        </div>
      </div>
    </div>
  )
}

export default Preloader
