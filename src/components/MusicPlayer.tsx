import * as React from "react"
import { SONGS } from "@/data"
import { Pause, Play, Volume2, VolumeX } from "lucide-react"

const formatTime = (seconds: number) => {
  if (!Number.isFinite(seconds)) return "0:00"
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = Math.floor(seconds % 60)
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
}

function TrackTitle({ title }: { title: string }) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const textRef = React.useRef<HTMLSpanElement>(null)
  const [overflow, setOverflow] = React.useState(0)

  React.useEffect(() => {
    const measure = () => {
      const container = containerRef.current
      const text = textRef.current
      if (!container || !text) return
      setOverflow(Math.max(0, text.scrollWidth - container.clientWidth))
    }
    measure()
    const observer = new ResizeObserver(measure)
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [title])

  return (
    <div ref={containerRef} className="p3-player__title-wrap">
      <span ref={textRef} className={overflow ? "is-marquee" : ""} style={{ "--title-overflow": `${overflow}px` } as React.CSSProperties}>{title}</span>
    </div>
  )
}

export function MusicPlayer() {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [progress, setProgress] = React.useState(0)
  const [duration, setDuration] = React.useState(0)
  const [volume, setVolume] = React.useState(0.72)
  const [previousVolume, setPreviousVolume] = React.useState(0.72)
  const audioRef = React.useRef<HTMLAudioElement>(null)

  const currentSong = SONGS[currentIndex]

  const selectSong = React.useCallback((index: number) => {
    setCurrentIndex(index)
    setProgress(0)
  }, [])

  const nextSong = React.useCallback(() => selectSong((currentIndex + 1) % SONGS.length), [currentIndex, selectSong])

  React.useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = volume
  }, [volume])

  React.useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) audio.play().catch(() => setIsPlaying(false))
    else audio.pause()
  }, [currentIndex, isPlaying])

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement
      if (target.tagName === "INPUT" || target.tagName === "BUTTON") return
      if (event.code === "Space") {
        event.preventDefault()
        setIsPlaying((value) => !value)
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  const toggleMute = () => {
    if (volume > 0) {
      setPreviousVolume(volume)
      setVolume(0)
    } else {
      setVolume(previousVolume || 0.72)
    }
  }

  const seek = (value: number) => {
    const audio = audioRef.current
    if (!audio) return
    audio.currentTime = value
    setProgress(value)
  }

  const handleEnded = () => {
    const audio = audioRef.current
    if (audio) {
      audio.currentTime = 0
      audio.play().catch(() => setIsPlaying(false))
      return
    }
    nextSong()
  }

  const progressPercent = duration ? (progress / duration) * 100 : 0
  const volumePercent = volume * 100

  return (
    <section className="p3-player" aria-label="Music player">
      <svg className="p3-player__headset-art" viewBox="0 0 120 120" aria-hidden="true">
        <path d="M25 67V53a35 35 0 0 1 70 0v14" fill="none" stroke="currentColor" strokeWidth="11" strokeLinecap="round" />
        <path d="M20 63h17v35H20a8 8 0 0 1-8-8V71a8 8 0 0 1 8-8Zm63 0h17a8 8 0 0 1 8 8v19a8 8 0 0 1-8 8H83Z" fill="currentColor" />
        <path d="M26 73h6m62 0h6" stroke="white" strokeWidth="4" strokeLinecap="round" opacity=".9" />
        <path d="m77 101 9 9" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      </svg>
      <div className="p3-player__topline"><span>late night radio</span><span aria-hidden></span></div>
      <div className="p3-player__main">
        <div className="p3-player__art">
          <img src={currentSong.albumArt} alt={`Album cover for ${currentSong.title}`} />
          <span className="p3-player__tape p3-player__tape--left" aria-hidden />
          <span className="p3-player__tape p3-player__tape--right" aria-hidden />
          <span className="p3-player__moon" aria-hidden>☾</span>
          <div className={`p3-player__disc ${isPlaying ? "is-spinning" : ""}`} aria-hidden><span /></div>
        </div>

        <div className="p3-player__details">
          <div className="p3-player__now">NOW PLAYING <span className={isPlaying ? "is-live" : ""}>{isPlaying ? "ON AIR" : "STANDBY"}</span></div>
          <TrackTitle title={currentSong.title} />
          <p>{currentSong.artist}</p>
          <div className="p3-player__wave" aria-hidden>{Array.from({ length: 28 }, (_, index) => <i key={index} className={isPlaying ? "is-active" : ""} style={{ "--bar": `${20 + ((index * 29) % 65)}%`, "--delay": `${index * -0.07}s` } as React.CSSProperties} />)}</div>
          <div className="p3-player__timeline">
            <span>{formatTime(progress)}</span>
            <input aria-label="Song progress" type="range" min="0" max={duration || 0} step="0.1" value={progress} onChange={(event) => seek(Number(event.target.value))} style={{ "--range-value": `${progressPercent}%` } as React.CSSProperties} />
            <span>{formatTime(duration)}</span>
          </div>
          <div className="p3-player__controls">
            <button type="button" className="p3-player__play" onClick={() => setIsPlaying((value) => !value)} aria-label={isPlaying ? "Pause" : "Play"}>{isPlaying ? <Pause fill="currentColor" /> : <Play fill="currentColor" />}</button>
          </div>
        </div>
      </div>
      <div className="p3-player__bottom">
        <span className="p3-player__headphones" aria-hidden>♬</span>
        <div className="p3-player__volume"><button type="button" onClick={toggleMute} aria-label={volume ? "Mute" : "Unmute"}>{volume ? <Volume2 /> : <VolumeX />}</button><input aria-label="Volume" type="range" min="0" max="1" step="0.01" value={volume} onChange={(event) => setVolume(Number(event.target.value))} style={{ "--range-value": `${volumePercent}%` } as React.CSSProperties} /><span>{Math.round(volumePercent)}</span></div>
        <span className="p3-player__note">press space to play</span>
      </div>
      <audio ref={audioRef} src={currentSong.src} preload="metadata" onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)} onTimeUpdate={(event) => setProgress(event.currentTarget.currentTime)} onEnded={handleEnded} />
    </section>
  )
}
