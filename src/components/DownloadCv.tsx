import { Download } from "lucide-react"

const cvPath = "/cv/CV%20-%20Raihan%20Satya%20Natha%20Hamzah.pdf"

export function DownloadCv() {
  return (
    <a className="cv-fab" href={cvPath} download="CV - Raihan Satya Natha Hamzah.pdf" aria-label="Download CV Raihan Satya Natha Hamzah">
      <span className="cv-fab__tape" aria-hidden />
      <span className="cv-fab__duck" aria-hidden>🦆</span>
      <span className="cv-fab__text"><small>keep this!</small>Download CV</span>
      <span className="cv-fab__icon" aria-hidden><Download /></span>
      <span className="cv-fab__sparkle cv-fab__sparkle--one" aria-hidden>✦</span>
      <span className="cv-fab__sparkle cv-fab__sparkle--two" aria-hidden>✦</span>
    </a>
  )
}
