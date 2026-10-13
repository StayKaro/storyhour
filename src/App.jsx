import React from 'react'
import Lineup from './Lineup.jsx'
import { Divider, Mandala } from './Ornaments.jsx'
import { characters as c } from './characters.js'
import useReveal from './useReveal.js'

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

function Intro() {
  const ref = useReveal()
  const items = ['krishna', 'hanuman', 'royal', 'prince', 'warrior']
  return (
    <section className="intro reveal" ref={ref} aria-labelledby="intro-title">
      <Divider />
      <h2 id="intro-title">Where Myths Become Memories</h2>
      <p>From the courage of Hanuman to the wisdom of Krishna, discover the legendary characters, timeless lessons, and extraordinary adventures woven into India’s rich storytelling heritage.</p>
      <ul className="gallery">
        {items.map((k, i) => (
          <li key={k} style={{ '--i': i }}>
            <div className="portrait"><img src={c[k].src} width={c[k].w} height={c[k].h} alt={c[k].alt} loading="lazy" decoding="async" /></div>
            <span>{c[k].caption}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Closing() {
  const ref = useReveal()
  return (
    <section className="closing reveal" ref={ref}>
      <Mandala className="closing-mandala" />
      <p className="closing-1">The stories are waiting.</p>
      <p className="closing-2">Our journey begins soon.</p>
      <Divider />
      <img className="logo logo-lg" src="/logo.jpeg" width="1600" height="1000" alt="Story Hour" loading="lazy" />
    </section>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Closing />
      </main>
      <footer className="footer"><p>Celebrating the timeless beauty of Indian mythology.</p></footer>
    </>
  )
}
