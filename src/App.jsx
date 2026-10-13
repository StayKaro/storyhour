import React from 'react'
import Lineup from './Lineup.jsx'
import { Divider, Mandala } from './Ornaments.jsx'

function Header() {
  return (
    <header className="header">
      <img className="logo" src="/logo.jpeg" width="1600" height="1000" alt="Story Hour" />
      <Divider className="header-divider" />
      <p className="header-tag">A New Chapter Begins</p>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Mandala className="bg-mandala" />
      <div className="hero-copy">
        <p className="eyebrow rise" style={{ '--d': '0ms' }}>Ancient Wisdom. Timeless Stories.</p>
        <h1 id="hero-title" className="rise" style={{ '--d': '100ms' }}>
          <span className="h-red">Our New Website</span>{' '}
          <span className="h-blue">Is Launching Soon</span>
        </h1>
        <p className="lead rise" style={{ '--d': '220ms' }}>Step into a world where gods, heroes, and legendary tales come alive.</p>
        <p className="sub rise" style={{ '--d': '300ms' }}>India’s timeless stories. Reimagined for a new generation.</p>
        <div className="soon rise" style={{ '--d': '400ms' }}>
          <span className="soon-badge"><i aria-hidden="true" />Coming Soon<i aria-hidden="true" /></span>
          <Divider />
          <p className="soon-line">A new home for the stories that shaped generations.</p>
        </div>
      </div>
      <Lineup />
    </section>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
    </>
  )
}
