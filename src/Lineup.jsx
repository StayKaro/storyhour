import React from 'react'
import { characters as c } from './characters.js'
import { Arch, Mandala } from './Ornaments.jsx'

// [character, height as a share of the tallest figure, float index]
const order = [
  ['warrior', 0.6, 0], ['royal', 0.86, 1], ['krishna', 1, 2], ['hanuman', 0.93, 3], ['prince', 0.72, 4],
]

export default function Lineup() {
  return (
    <div className="stage">
      <div className="glow" aria-hidden="true" />
      <Mandala className="stage-mandala" />
      <Arch />
      <div className="lineup">
        {order.map(([key, scale, i]) => (
          <div key={key} className={`fig fig-${key}`} style={{ '--s': scale, '--i': i, '--ar': c[key].w / c[key].h }}>
            <div className="float">
              <img src={c[key].src} width={c[key].w} height={c[key].h} alt={c[key].alt} decoding="async" fetchpriority={key === 'krishna' ? 'high' : undefined} />
            </div>
            <span className="shadow" aria-hidden="true" />
          </div>
        ))}
      </div>
      <div className="ground" aria-hidden="true" />
    </div>
  )
}
