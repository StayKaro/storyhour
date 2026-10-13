import React from 'react'

export function Divider({ className = '' }) {
  return (
    <svg className={`divider ${className}`} viewBox="0 0 240 24" aria-hidden="true">
      <line x1="0" y1="12" x2="98" y2="12" />
      <line x1="142" y1="12" x2="240" y2="12" />
      <path d="M120 2 L130 12 L120 22 L110 12 Z" />
      <circle cx="120" cy="12" r="3" className="fill" />
      <circle cx="100" cy="12" r="1.8" className="fill" />
      <circle cx="140" cy="12" r="1.8" className="fill" />
    </svg>
  )
}

export function Mandala({ className = '' }) {
  const petals = Array.from({ length: 16 }, (_, i) => i * 22.5)
  return (
    <svg className={className} viewBox="-100 -100 200 200" aria-hidden="true">
      <g className="mandala">
        <circle r="96" /><circle r="84" strokeDasharray="2 5" /><circle r="46" /><circle r="14" />
        {petals.map(a => (
          <g key={a} transform={`rotate(${a})`}>
            <path d="M0 -46 C10 -62 10 -76 0 -84 C-10 -76 -10 -62 0 -46Z" />
            <circle cy="-90" r="1.6" className="fill" />
          </g>
        ))}
        {petals.filter((_, i) => i % 2).map(a => (
          <path key={a} transform={`rotate(${a})`} d="M0 -14 C5 -24 5 -32 0 -40 C-5 -32 -5 -24 0 -14Z" />
        ))}
      </g>
    </svg>
  )
}

// Temple-style arch frame that sits behind the character lineup.
export function Arch() {
  return (
    <svg className="arch" viewBox="0 0 400 440" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
      <defs>
        <linearGradient id="gold" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#e6c677" /><stop offset=".5" stopColor="#b8893a" /><stop offset="1" stopColor="#e0bd6a" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#gold)" strokeWidth="2">
        <path d="M20 440 V190 C20 120 80 90 120 70 C160 52 185 34 200 6 C215 34 240 52 280 70 C320 90 380 120 380 190 V440" />
        <path d="M38 440 V194 C38 132 90 106 128 88 C166 70 190 54 200 28 C210 54 234 70 272 88 C310 106 362 132 362 194 V440" strokeWidth="1" opacity=".7" />
        <path d="M56 440 V198 C56 144 100 122 136 106 C170 90 192 76 200 52 C208 76 230 90 264 106 C300 122 344 144 344 198 V440" strokeWidth=".8" opacity=".5" strokeDasharray="3 5" />
      </g>
      <circle cx="200" cy="6" r="4" fill="url(#gold)" />
    </svg>
  )
}
