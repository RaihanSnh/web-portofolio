 
import { TOOLS, PROFILE } from "@/data"
import { Tooltip } from "@/components/ui/tooltip"

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 py-16">
      <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] items-start">
        <div className="relative">
          <div className="rounded-xl border border-border bg-card p-6 shadow-[0_15px_40px_-20px_rgb(0_0_0_/_45%)] relative">
            <h2 className="font-black text-2xl md:text-3xl mb-2 underline-scribble inline-block">About</h2>
            <p className="leading-relaxed">
              Hi! I&apos;m {PROFILE.name}. I write software that tries to be calm, clear, and
              reliable; readable code, straightforward ideas, and solutions that make
              sense in real life. Less magic, more understanding.
            </p>
            <p className="mt-3 italic">craft slowly, care deeply, debug patiently.</p>
            <span aria-hidden className="absolute -right-3 -top-2 h-7 w-7 bg-[url('/img/pixel-heart.svg')] bg-contain bg-no-repeat animate-bob" />
            <span aria-hidden className="absolute right-8 -bottom-3 h-7 w-7 bg-[url('/img/pacman.svg')] bg-contain bg-no-repeat animate-bob" />
            <span aria-hidden className="absolute -right-5 bottom-5 h-10 w-16 bg-[url('/img/redhood.png')] bg-contain bg-no-repeat animate-drift" />
          </div>

          <div className="absolute -top-6 -left-4 rotate-[-3deg] rounded-md border border-yellow-300 bg-yellow-100 px-3 py-2 text-sm shadow text-black">Keep learning • Stay kind</div>
        </div>

        <div className="relative">
          <div className="flex flex-wrap gap-3">
            {TOOLS.map((t, i) => {
              const rot = ((i * 17) % 7) - 3 // -3..3 deg
              const y = ((i * 23) % 6) - 3 // -3..3 px
              const x = ((i * 31) % 6) - 3
              return (
                <Tooltip key={t.name} content={<div><span className="font-semibold">{t.name}</span></div>}>
                  <img
                    src={t.icon}
                    alt={`${t.name} icon`}
                    className="h-10 w-10 md:h-12 md:w-12 rounded-md border border-border bg-card p-2 shadow transition-transform hover:scale-110 hover:-rotate-2 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ping-slow"
                    style={{ transform: `translate(${x}px, ${y}px) rotate(${rot}deg)` }}
                  />
                </Tooltip>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}


