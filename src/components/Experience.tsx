import * as React from "react"
import { EXPERIENCES } from "@/data"
import { MapPin, Rewind } from "lucide-react"

export function Experience() {
  const [isOpen, setIsOpen] = React.useState(false)
  const reelRef = React.useRef<HTMLDivElement>(null)
  const dragRef = React.useRef({ active: false, startX: 0, startScroll: 0 })

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const reel = reelRef.current
    if (!reel) return
    dragRef.current = { active: true, startX: event.clientX, startScroll: reel.scrollLeft }
    reel.setPointerCapture(event.pointerId)
  }

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const reel = reelRef.current
    if (!reel || !dragRef.current.active) return
    reel.scrollLeft = dragRef.current.startScroll - (event.clientX - dragRef.current.startX)
  }

  const stopDragging = () => { dragRef.current.active = false }

  return (
    <section id="experience" className="experience-section mx-auto max-w-6xl px-4 py-16">
      <div className="experience-heading">
        <div>
          <p className="font-handwriting text-lg text-muted-foreground -rotate-1">a few pages from my work diary</p>
          <h2 className="font-black text-2xl md:text-3xl underline-scribble inline-block">Experience</h2>
        </div>
        <button className={`journey-toggle ${isOpen ? "is-open" : ""}`} type="button" onClick={() => setIsOpen((value) => !value)} aria-expanded={isOpen} aria-controls="journey-reel">
          <Rewind aria-hidden />
          <span>{isOpen ? "close the journal" : "rewind my journey"}</span>
          <i aria-hidden>R</i>
        </button>
      </div>

      <div className={`journey-book ${isOpen ? "is-open" : ""}`} id="journey-reel">
        <div className="journey-book__note">drag the pages <span aria-hidden>-&gt;</span></div>
        <div className="journey-reel" ref={reelRef} onPointerDown={handlePointerDown} onPointerMove={handlePointerMove} onPointerUp={stopDragging} onPointerCancel={stopDragging}>
          {EXPERIENCES.map((experience, index) => (
            <article className={`journey-chapter journey-chapter--${experience.color}`} key={experience.id}>
              <span className="journey-chapter__tape" aria-hidden />
              <span className="journey-chapter__number" aria-hidden>0{index + 1}</span>
              <p className="journey-chapter__year">{experience.period}</p>
              <h3>{experience.organization}</h3>
              <p className="journey-chapter__employment">{experience.employment}</p>
              <div className="journey-chapter__details">
                {experience.roles.map((role) => <p key={role}>* {role}</p>)}
              </div>
              <p className="journey-chapter__location"><MapPin aria-hidden /> {experience.location}</p>
            </article>
          ))}
          <div className="journey-reel__end" aria-hidden><span>more pages<br />coming soon</span>+</div>
        </div>
      </div>
    </section>
  )
}
