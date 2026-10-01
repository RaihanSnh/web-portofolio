import * as React from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu } from "lucide-react"

export function Navbar() {
  const [open, setOpen] = React.useState(false)
  const [isDark, setIsDark] = React.useState(false)
  const wipingRef = React.useRef(false)

  React.useEffect(() => {
    const root = document.documentElement
    if (isDark) root.classList.add("dark")
    else root.classList.remove("dark")
  }, [isDark])

  const linkClass = "px-3 py-2 rounded-md hover:bg-accent/60"

  const toggleTheme = () => {
    if (wipingRef.current) return
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      setIsDark((value) => !value)
      return
    }

    wipingRef.current = true
    const nextThemeIsDark = !isDark
    const container = document.createElement('div')
    container.className = `theme-transition ${nextThemeIsDark ? 'to-night' : 'to-day'}`
    const sky = document.createElement('div')
    sky.className = 'sky'
    const stars = document.createElement('div')
    stars.className = 'stars'
    const sun = document.createElement('div')
    sun.className = 'sun'
    const moon = document.createElement('div')
    moon.className = 'moon'
    const horizon = document.createElement('div')
    horizon.className = 'horizon'
    container.appendChild(sky)
    container.appendChild(stars)
    container.appendChild(sun)
    container.appendChild(moon)
    container.appendChild(horizon)
    document.body.appendChild(container)

    window.requestAnimationFrame(() => container.classList.add('is-playing'))
    const themeTimer = window.setTimeout(() => setIsDark(nextThemeIsDark), 700)
    const endTimer = window.setTimeout(() => {
      container.remove()
      wipingRef.current = false
      window.clearTimeout(themeTimer)
      window.clearTimeout(endTimer)
    }, 1550)
  }

  const smoothScrollTo = (hash: string) => {
    const id = hash.replace('#', '')
    const el = document.getElementById(id)
    if (!el) return
    const header = document.querySelector('header') as HTMLElement | null
    const offset = header ? header.offsetHeight + 8 : 0
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <header className="sticky top-2 z-50 mx-2 rounded-3xl border border-border overflow-hidden backdrop-blur supports-[backdrop-filter]:bg-background/70 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.35)]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a href="#hero" className="flex items-center gap-2 font-black tracking-tight text-xl md:text-2xl" aria-label="Go to top" onClick={(e) => { e.preventDefault(); smoothScrollTo('#hero') }}>
          <img src="/icons/logo-temp.svg" alt="Raihan logo" className="h-7 w-7 rounded-sm border border-border bg-card" />
          Raihan.
        </a>
        <div className="hidden md:flex items-center gap-1">
          <a href="#about" className={linkClass} onClick={(e) => { e.preventDefault(); smoothScrollTo('#about') }}>About</a>
          <a href="#experience" className={linkClass} onClick={(e) => { e.preventDefault(); smoothScrollTo('#experience') }}>Experience</a>
          <a href="#projects" className={linkClass} onClick={(e) => { e.preventDefault(); smoothScrollTo('#projects') }}>Projects</a>
          <a href="#social" className={linkClass} onClick={(e) => { e.preventDefault(); smoothScrollTo('#social') }}>Social</a>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            aria-pressed={isDark}
            onClick={toggleTheme}
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" aria-label="Open menu" onClick={() => setOpen(v => !v)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </nav>
      <div className="hidden md:block border-t border-border">
        <div className="relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-4 py-2 grid grid-flow-col auto-cols-[minmax(72px,1fr)] gap-3">
            {[
              "/img/washi.svg",
              "/img/sticker-star.svg",
              "/img/cassette.svg",
              "/img/sticker-heart.svg",
              "/img/cat.svg",
              "/img/pick.svg",
              "/img/ticket.svg",
              "/img/washi-2.svg",
              "/img/tear-paper.svg",
              "/img/starburst.svg",
              "/img/bolt.svg",
            ].map((src, i) => (
              <span
                key={src + i}
                style={{ ['--r' as any]: `${(i%2?1:-1)}deg`, backgroundImage: `url('${src}')` }}
                className={`h-7 w-full bg-center bg-no-repeat bg-contain ${i%2? 'animate-bob':'animate-drift'}`}
                aria-hidden
              />
            ))}
          </div>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2">
            <a className={linkClass} href="#about" onClick={(e) => { e.preventDefault(); setOpen(false); smoothScrollTo('#about') }}>About</a>
            <a className={linkClass} href="#experience" onClick={(e) => { e.preventDefault(); setOpen(false); smoothScrollTo('#experience') }}>Experience</a>
            <a className={linkClass} href="#projects" onClick={(e) => { e.preventDefault(); setOpen(false); smoothScrollTo('#projects') }}>Projects</a>
            <a className={linkClass} href="#social" onClick={(e) => { e.preventDefault(); setOpen(false); smoothScrollTo('#social') }}>Social</a>
            <Button
              variant="outline"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              aria-pressed={isDark}
              className="mt-2"
            >
              {isDark ? "Light" : "Dark"} Mode
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
