'use client';

import { CaseStudy } from '@/app/_components/case-study';

const data = {
  number: '04',
  title: 'Evoltic',
  category: 'Sustainability / Web App',
  kicker: 'EV readiness for housing societies',
  tagline: ['Plan before', 'you plug in.'],
  intro:
    'A neutral planner that reads a housing society’s electricity supply and gives the committee one clear, defensible number before anyone installs a charger.',
  heroVideo: '/evoltic-hero-loop.mp4?v=2',
  heroPoster: '/images/evoltic-hero-poster.jpg?v=2',
  info: [
    ['Role', 'Design & Development'],
    ['Focus', 'Data / UX / Sustainability'],
    ['Type', 'Interactive Web App'],
    ['Built for', 'SPARK-A-THON 2026'],
  ],
  concept: {
    headline: 'Residents are asking for chargers.',
    italic: 'Committees need an answer.',
    body: [
      'EV adoption is rising faster than housing societies can plan for it. Most committees have no simple way to know how many chargers their building can safely support.',
      'Evoltic turns the society’s supply, evening peak and charging choices into one number, plus a plain-language report the committee can take to its AGM.',
    ],
  },
  film: '/evoltic-demo.mp4',
  filmPoster: '/images/evoltic-poster.jpg',
  explore: {
    label: 'Four screens / One decision',
    lines: ['Built to', 'be trusted.'],
    rows: [
      {
        name: 'The answer',
        type: 'Results at a glance',
        description: 'EVs that can charge today, with overnight smart charging, and when to apply for more load.',
        image: '/images/case/evoltic-f1.jpg',
      },
      {
        name: 'The planner',
        type: 'Five guided steps',
        description: 'Building, supply, peak use, charging and backup, simple enough for any committee member.',
        image: '/images/case/evoltic-f2.jpg',
      },
      {
        name: 'Headroom',
        type: 'Your supply, visualised',
        description: 'Sanctioned supply, safe planning limit and peak use drawn as one picture everyone understands.',
        image: '/images/case/evoltic-f3.jpg',
      },
      {
        name: 'Safety',
        type: 'Checklist & policy',
        description: 'Metering, billing, backup power and approvals, written so the committee can act on it.',
        image: '/images/case/evoltic-f4.jpg',
      },
    ],
  },
  showcase: {
    label: 'The Planner',
    lines: ['Check your', 'building.'],
    body: 'A step-by-step check that asks only what a committee actually knows, then explains the result in plain language.',
    video: '/evoltic-demo.mp4',
    start: 36,
    end: 47,
    caption: 'Building check / Motion',
  },
  screens: [
    { src: '/images/evoltic-screen-hero.jpg', caption: 'Landing / The hook' },
    { src: '/images/evoltic-screen-plan.jpg', caption: 'Closing / Call to action' },
  ],
  marquee: ['Supply', 'Peak', 'Headroom', 'Schedule', 'Charge'],
  build: {
    lines: ['Built for', 'the committee.'],
    body: 'Evoltic was designed around the people who have to make the decision: clear numbers, calm visuals and nothing to sell.',
    rows: [
      {
        kicker: 'Motion / Atmosphere',
        title: 'Interaction',
        description: 'A cinematic video hero, scroll-led storytelling and smooth transitions make an infrastructure topic feel approachable.',
      },
      {
        kicker: 'Inputs / Results',
        title: 'Planning flow',
        description: 'A guided multi-step form turns supply, peak use and charger choice into a single EV-readiness result.',
      },
      {
        kicker: 'Trust / Neutrality',
        title: 'Communication',
        description: 'Plain-language explanations, a safety checklist and an FAQ help committees defend the number at their AGM.',
      },
    ],
  },
  stack: ['React', 'React Router 7', 'TypeScript', 'Tailwind CSS'],
  closing: ['Plan before', 'you plug in.'],
  summary:
    'An EV-readiness planner for India’s housing societies, built for SPARK-A-THON 2026, combining data, UX and a neutral, trust-first tone.',
  links: [
    { label: 'Live Site', href: 'https://evoltic.vercel.app/' },
    { label: 'View Source', href: 'https://github.com/angelinaserpes/evoltic' },
  ],
  next: { href: '/inamigos', title: 'InAmigos', number: '05', image: '/images/inamigos.png' },
};

export default function Evoltic() {
  return <CaseStudy data={data} />;
}
