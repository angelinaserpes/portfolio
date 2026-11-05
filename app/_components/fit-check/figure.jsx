'use client';

/** Simple editorial mannequin, re-drawn from the current picks. */
export function FitFigure({ top, bottom, accessory }) {
  return (
    <svg viewBox='0 0 200 420' className='fc-figure' role='img' aria-label={`${top.name}, ${bottom.name}, ${accessory.name}`}>
      <ellipse cx='100' cy='408' rx='58' ry='7' fill='rgba(0,0,0,0.12)' />
      {/* legs */}
      <rect x='82' y='250' width='12' height='150' rx='6' fill='#D9C2AE' />
      <rect x='106' y='250' width='12' height='150' rx='6' fill='#D9C2AE' />
      {/* bottom */}
      {bottom.shape === 'cargos' ? (
        <g fill={bottom.color}>
          <path d='M66 196 H134 L130 392 H104 L100 262 L96 392 H70 Z' />
          <rect x='70' y='286' width='14' height='22' rx='2' fill='rgba(255,255,255,0.12)' />
          <rect x='116' y='286' width='14' height='22' rx='2' fill='rgba(255,255,255,0.12)' />
        </g>
      ) : null}
      {bottom.shape === 'pleats' ? (
        <g>
          <path d='M68 196 H132 L156 330 H44 Z' fill={bottom.color} />
          {[60, 78, 96, 114, 132].map(x => (
            <line key={x} x1={x + 8} y1='200' x2={x - 4 + (x - 96) * 0.25} y2='328' stroke='rgba(0,0,0,0.15)' strokeWidth='1.5' />
          ))}
        </g>
      ) : null}
      {bottom.shape === 'flares' ? (
        <path d='M68 196 H132 L140 392 H106 L100 270 L94 392 H60 Z' fill={bottom.color} />
      ) : null}
      {/* arms */}
      <rect x='44' y='100' width='12' height='120' rx='6' fill='#D9C2AE' transform='rotate(8 50 100)' />
      <rect x='144' y='100' width='12' height='120' rx='6' fill='#D9C2AE' transform='rotate(-8 150 100)' />
      {/* top */}
      {top.shape === 'blazer' ? (
        <g>
          <path d='M58 92 H142 L150 206 H50 Z' fill={top.color} />
          <path d='M100 92 L84 150 L100 206 L116 150 Z' fill='#F2EDE4' />
          <path d='M100 92 L90 140 L100 150 L110 140 Z' fill={top.color} opacity='0.6' />
          <circle cx='100' cy='176' r='3' fill='#F2EDE4' />
        </g>
      ) : null}
      {top.shape === 'knit' ? (
        <g>
          <path d='M60 92 H140 L146 204 H54 Z' fill={top.color} />
          {[110, 128, 146, 164, 182].map(y => (
            <line key={y} x1='58' y1={y} x2='142' y2={y} stroke='rgba(255,255,255,0.12)' strokeWidth='3' />
          ))}
          <rect x='54' y='194' width='92' height='10' fill='rgba(0,0,0,0.15)' />
        </g>
      ) : null}
      {top.shape === 'crop' ? (
        <g>
          <path d='M62 94 H138 L142 166 H58 Z' fill={top.color} />
          <rect x='70' y='166' width='60' height='32' fill='#D9C2AE' />
        </g>
      ) : null}
      {top.shape === 'trench' ? (
        <g>
          <path d='M58 92 H142 L156 300 H44 Z' fill={top.color} />
          <rect x='50' y='182' width='100' height='10' fill='rgba(0,0,0,0.25)' />
          <line x1='100' y1='92' x2='100' y2='300' stroke='rgba(0,0,0,0.2)' strokeWidth='2' />
        </g>
      ) : null}
      {/* neck + head */}
      <rect x='92' y='72' width='16' height='22' fill='#D9C2AE' />
      <circle cx='100' cy='52' r='26' fill='#D9C2AE' />
      <path d='M72 50 C72 18 128 18 128 50 C128 36 116 30 100 30 C84 30 72 36 72 50 Z' fill='#2A211C' />
      {/* accessory */}
      {accessory.shape === 'earrings' ? (
        <g fill={accessory.color}>
          <circle cx='74' cy='64' r='5' />
          <circle cx='126' cy='64' r='5' />
          <rect x='72' y='70' width='4' height='10' />
          <rect x='124' y='70' width='4' height='10' />
        </g>
      ) : null}
      {accessory.shape === 'shades' ? (
        <g fill={accessory.color}>
          <rect x='78' y='44' width='19' height='11' rx='4' />
          <rect x='103' y='44' width='19' height='11' rx='4' />
          <rect x='96' y='47' width='8' height='3' />
        </g>
      ) : null}
      {accessory.shape === 'tote' ? (
        <g>
          <path d='M150 210 C150 186 176 186 176 210' fill='none' stroke={accessory.color} strokeWidth='4' />
          <rect x='144' y='208' width='38' height='44' rx='3' fill={accessory.color} />
        </g>
      ) : null}
    </svg>
  );
}
