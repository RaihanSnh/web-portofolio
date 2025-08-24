import * as React from "react"
import { PROFILE } from "@/data"
import { MusicPlayer } from "@/components/MusicPlayer"

const stickers = [
  { label: "code", emoji: "💻" },
  { label: "coffee", emoji: "☕" },
  { label: "guitar", emoji: "🎸" },
  { label: "books", emoji: "📚" },
  { label: "film", emoji: "🎬" },
  { label: "fashion", emoji: "🧥" },
  { label: "music", emoji: "🎵" },
  { label: "nature", emoji: "⛰️" },
  { label: "bakery", emoji: "🥐" },
  { label: "cycling", emoji: "🚴" },
  { label: "craft", emoji: "✂️" },
]

export function Hero() {
  const [pinned, setPinned] = React.useState<Set<string>>(new Set())
  const togglePin = (label: string) => {
    setPinned(prev => {
      const next = new Set(prev)
      if (next.has(label)) next.delete(label)
      else next.add(label)
      return next
    })
  }
  return (
    <section id="hero" className="relative mx-auto max-w-6xl px-4 py-10 md:py-16">
      <div className="grid gap-8 md:grid-cols-2 items-start">
        <div className="relative">
          <div
            className="relative mx-auto aspect-[7/9] w-72 md:w-80 rounded-[12px] border border-border bg-muted overflow-hidden shadow-[0_25px_50px_-12px_rgb(0_0_0_/_45%)] rotate-[-2deg]"
            aria-label="Portrait placeholder"
          >
            <img
              src={PROFILE.photo.src}
              width={PROFILE.photo.width}
              height={PROFILE.photo.height}
              alt={PROFILE.photo.alt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[url('/placeholder/paper-texture.svg')] opacity-20 mix-blend-overlay" />
            <div className="absolute left-2 top-2 rotate-6 bg-yellow-200 px-3 py-1 text-sm shadow border border-yellow-300 text-black">hello!</div>
            <div className="pointer-events-none absolute -right-4 top-6 h-10 w-10 rotate-6 bg-[url('/img/clip.svg')] bg-contain bg-no-repeat opacity-80" />
          </div>

          <ul className="mt-4 flex flex-wrap gap-2">
            {stickers.map((s, i) => {
              const isPinned = pinned.has(s.label)
              const base = "relative group rounded-full border px-3 py-1 shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              const vibe = isPinned
                ? "bg-accent/90 border-border scale-[1.03]"
                : "bg-card/80 border-border hover:-rotate-2 hover:scale-105"
              const style = { ["--r" as any]: `${(i % 2 ? 1 : -1) * 2}deg` }
              return (
                <li key={s.label}>
                  <button
                    type="button"
                    aria-pressed={isPinned}
                    onClick={() => togglePin(s.label)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault()
                        togglePin(s.label)
                      }
                    }}
                    className={`${base} ${vibe}`}
                    style={style}
                    title={isPinned ? "unp in" : "pin"}
                  >
                    <span className="mr-1">{s.emoji}</span>
                    <span className="font-handwriting lowercase tracking-wide">{s.label}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight">
              {PROFILE.name}
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-muted-foreground">
              <span className="font-handwriting text-2xl md:text-3xl">{PROFILE.role}</span>
              <span className="mx-2">•</span>
              <span className="italic">{PROFILE.tagline}</span>
            </p>
          </div>

          <MusicPlayer />
        </div>
      </div>
    </section>
  )
}


