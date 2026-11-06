'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';

import { CaseStudy } from '@/app/_components/case-study';

// Same CPCB National AQI breakpoints and categories as AirSense's data layer (airsense_data.py)
const BREAKPOINTS = {
  pm25: [[30, 50], [60, 100], [90, 200], [120, 300], [250, 400], [380, 500]],
  pm10: [[50, 50], [100, 100], [250, 200], [350, 300], [430, 400], [510, 500]],
  no2: [[40, 50], [80, 100], [180, 200], [280, 300], [400, 400], [520, 500]],
};
const CATEGORIES = [
  [50, 'Good', '#00B050'],
  [100, 'Satisfactory', '#92D050'],
  [200, 'Moderate', '#E6C000'],
  [300, 'Poor', '#FF9900'],
  [400, 'Very Poor', '#FF0000'],
  [500, 'Severe', '#A50021'],
];
const LABELS = { pm25: 'PM2.5', pm10: 'PM10', no2: 'NO₂' };
const MAX = { pm25: 380, pm10: 510, no2: 520 };

function subIndex(pollutant, c) {
  let lowC = 0;
  let lowI = 0;
  for (const [highC, highI] of BREAKPOINTS[pollutant]) {
    if (c <= highC) return Math.round(lowI + ((c - lowC) * (highI - lowI)) / (highC - lowC));
    lowC = highC;
    lowI = highI;
  }
  return 500;
}

function category(aqi) {
  return CATEGORIES.find(([upper]) => aqi <= upper) || CATEGORIES[CATEGORIES.length - 1];
}

function AqiCalculator() {
  const [values, setValues] = useState({ pm25: 82, pm10: 128, no2: 39 });
  const subs = Object.fromEntries(Object.entries(values).map(([k, v]) => [k, subIndex(k, v)]));
  const dominant = Object.keys(subs).reduce((a, b) => (subs[a] >= subs[b] ? a : b));
  const aqi = subs[dominant];
  const [, name, colour] = category(aqi);

  return (
    <section className='bg-[#eeeae2] px-5 py-24 text-[#111] sm:px-6 md:px-12 md:py-32 lg:px-[8vw] lg:py-40'>
      <div className='grid gap-16 lg:grid-cols-12'>
        <div className='lg:col-span-5'>
          <p className='mb-7 text-[9px] uppercase tracking-[0.32em] text-black/40'>Try it / The AQI maths</p>
          <h2 className='text-6xl uppercase leading-[0.86] tracking-[-0.06em] md:text-8xl'>
            Move the
            <br />
            <span className='italic text-black/35'>pollution.</span>
          </h2>
          <p className='mt-10 max-w-md text-base leading-relaxed text-black/55'>
            This is the same CPCB calculation AirSense runs on live station data: each pollutant gets a sub-index, and the
            highest one becomes the AQI. Drag the sliders to see it react.
          </p>
        </div>

        <div className='lg:col-span-7'>
          <div className='border border-black/15 bg-white/50 p-6 md:p-10'>
            <div className='flex flex-wrap items-end justify-between gap-6 border-b border-black/15 pb-8'>
              <div>
                <p className='mb-2 text-[9px] uppercase tracking-[0.3em] text-black/40'>Indian AQI</p>
                <motion.p
                  key={aqi}
                  initial={{ opacity: 0.4, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='text-8xl leading-none tracking-[-0.06em] md:text-9xl'
                  style={{ color: colour }}
                >
                  {aqi}
                </motion.p>
              </div>
              <div className='text-right'>
                <p className='text-3xl tracking-[-0.03em] md:text-4xl' style={{ color: colour }}>
                  {name}
                </p>
                <p className='mt-2 text-[10px] uppercase tracking-[0.25em] text-black/45'>Driven by {LABELS[dominant]}</p>
              </div>
            </div>

            <div className='mt-6 flex h-2 overflow-hidden rounded-full'>
              {CATEGORIES.map(([, n, c]) => (
                <span key={n} className='h-full flex-1' style={{ background: c, opacity: n === name ? 1 : 0.25 }} />
              ))}
            </div>

            <div className='mt-10 grid gap-8'>
              {Object.keys(values).map(k => (
                <label key={k} className='block'>
                  <div className='mb-3 flex justify-between text-[10px] uppercase tracking-[0.25em] text-black/55'>
                    <span>
                      {LABELS[k]} · {values[k]} µg/m³
                    </span>
                    <span>sub-index {subs[k]}</span>
                  </div>
                  <input
                    type='range'
                    min='0'
                    max={MAX[k]}
                    value={values[k]}
                    onChange={e => setValues(v => ({ ...v, [k]: Number(e.target.value) }))}
                    className='w-full accent-[#111]'
                    aria-label={`${LABELS[k]} concentration`}
                  />
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const data = {
  number: '02',
  title: 'AirSense',
  category: 'Data / Desktop App',
  kicker: 'Air quality intelligence',
  tagline: ['Raw readings.', 'Clear decisions.'],
  intro:
    'A Python desktop app that turns live government station data into AQI trends, forecasts and the best time to be outdoors in Navi Mumbai.',
  info: [
    ['Role', 'Design & Development'],
    ['Focus', 'Data / Python / SQL'],
    ['Type', 'Desktop Application'],
    ['Data', 'OpenAQ · Open-Meteo · MySQL'],
  ],
  concept: {
    headline: 'Pollution numbers are everywhere.',
    italic: 'Answers are not.',
    body: [
      'Air-quality readings rarely answer the real question: is it a good time to go outside? AirSense pulls hourly station readings and makes them readable.',
      'It calculates the Indian AQI with the CPCB method, shows trends and comparisons across stations, and highlights the best outdoor window from the forecast.',
    ],
  },
  explore: {
    label: 'Five pages / One dashboard',
    lines: ['Built to', 'be read.'],
    rows: [
      { name: 'Dashboard', type: 'Live AQI', description: 'Current AQI and pollutant levels from CPCB / MPCB stations, colour-coded by category.' },
      { name: 'Trends', type: 'Charts', description: 'Any pollutant over time with AQI category colour bands, drawn with Matplotlib.' },
      { name: 'Forecast', type: 'Best outdoor window', description: 'An hourly forecast from Open-Meteo and the best time for walks or opening windows.' },
      { name: 'Compare', type: 'Stations', description: 'Side-by-side AQI and particulate levels across nearby stations.' },
      { name: 'History', type: 'Search & export', description: 'Look up readings by date range and export them to CSV.' },
    ],
  },
  showcase: {
    label: 'Under the hood',
    lines: ['The maths.', 'Not magic.'],
    body: 'Every AQI in AirSense comes from this: a sub-index per pollutant from the CPCB breakpoints, with the highest one becoming the AQI. Built in three stages: a Tkinter prototype, a MySQL version and a live API version.',
    code: `# airsense_data.py (simplified): the Indian AQI, the CPCB way
def sub_index(pollutant, concentration):
    low_c, low_i = 0.0, 0.0
    for high_c, high_i in BREAKPOINTS[pollutant]:
        if concentration <= high_c:
            return round(low_i + (concentration - low_c)
                         * (high_i - low_i) / (high_c - low_c))
        low_c, low_i = high_c, high_i
    return 500


def calc_aqi(averages):
    subs = {p: sub_index(p, v) for p, v in averages.items()}
    dominant = max(subs, key=subs.get)
    return subs[dominant], dominant`,
    caption: 'Data layer / Python',
  },
  marquee: ['Collect', 'Calculate', 'Compare', 'Forecast', 'Breathe'],
  build: {
    lines: ['Built beneath', 'the charts.'],
    body: 'AirSense keeps the maths, the data and the interface separate, so the numbers stay trustworthy and the app never freezes.',
    rows: [
      {
        kicker: 'Python / REST APIs',
        title: 'Data layer',
        description: 'Fetches station readings and forecasts, converts units and computes rolling 24-hour and 8-hour averages.',
      },
      {
        kicker: 'CPCB / AQI',
        title: 'The maths',
        description: 'Sub-indices for each pollutant using the official CPCB breakpoints, with the highest one becoming the AQI.',
      },
      {
        kicker: 'MySQL / Joins',
        title: 'Database',
        description: 'A MySQL version stores readings and forecasts, with a correlated subquery for each station’s latest reading.',
      },
      {
        kicker: 'Tkinter / Threads',
        title: 'Interface',
        description: 'A Tkinter GUI with embedded Matplotlib charts, loading data on background threads so the window stays responsive.',
      },
    ],
  },
  stack: ['Python', 'Tkinter', 'Matplotlib', 'MySQL', 'SQL', 'REST APIs'],
  closing: ['Raw readings.', 'Clear decisions.'],
  summary:
    'A data-driven desktop app for Navi Mumbai’s air quality, built in Python with live APIs, a MySQL version and the official CPCB AQI method.',
  links: [{ label: 'View Source', href: 'https://github.com/angelinaserpes/airsense' }],
  next: { href: '/phantom', title: 'Phantom', number: '03', image: '/images/phantom.png' },
};

export default function AirSense() {
  return (
    <CaseStudy data={data}>
      <AqiCalculator />
    </CaseStudy>
  );
}
