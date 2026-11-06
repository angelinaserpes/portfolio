'use client';

import { CaseStudy } from '@/app/_components/case-study';

const data = {
  theme: 'earth',
  number: '06',
  title: 'Revive',
  category: 'Sustainability / E-commerce',
  kicker: 'Eco-friendly shopping, web + Android',
  tagline: ['Give things', 'a second life.'],
  intro:
    'An eco-friendly store for sustainable and recycled essentials, with rewarding recycling pickups, Green Points and an Android app.',
  heroImage: '/images/revive-home.jpg',
  info: [
    ['Role', 'Design & Development'],
    ['Course', 'Product Design (HSSM301), FCRIT'],
    ['Type', 'Web + Android App'],
    ['Stack', 'React / TypeScript'],
  ],
  concept: {
    headline: 'Sustainable shopping feels like effort.',
    italic: 'It should feel rewarding.',
    body: [
      'Revive brings eco-friendly and recycled products into one calm, trustworthy store, so the greener choice is also the easier one.',
      'Recycling is built in: schedule a doorstep pickup, earn Green Points and spend them on your next order, with every order showing its own impact.',
    ],
  },
  film: '/revive-demo.mp4',
  filmPoster: '/images/revive-poster.jpg',
  explore: {
    label: 'One journey / Six screens',
    lines: ['Built to', 'be used.'],
    rows: [
      {
        name: 'Discover',
        type: 'Product detail',
        description: 'Every product shows its materials, impact and the Green Points it earns.',
        image: '/images/case/revive-f1.jpg',
      },
      {
        name: 'Cart',
        type: 'Slide-out basket',
        description: 'A quick cart that stays beside the shop, with points you can apply at checkout.',
        image: '/images/case/revive-f2.jpg',
      },
      {
        name: 'Checkout',
        type: 'UPI, card or cash',
        description: 'A three-step checkout with a scannable UPI QR for fast payments.',
        image: '/images/case/revive-f3.jpg',
      },
      {
        name: 'Impact',
        type: 'Order tracking',
        description: 'Delivery progress alongside the plastic and CO₂ each order saved.',
        image: '/images/case/revive-f4.jpg',
      },
      {
        name: 'Support',
        type: 'Help chat',
        description: 'A built-in support chat for order questions, right inside My Orders.',
        image: '/images/case/revive-f5.jpg',
      },
      {
        name: 'Recycle',
        type: 'Doorstep pickup',
        description: 'Pick what you are recycling, see the points you will earn and book a pickup.',
        image: '/images/case/revive-recycle.jpg',
        fit: 'contain',
      },
    ],
  },
  showcase: {
    label: 'Recycle & Earn',
    lines: ['Recycle it.', 'Earn it.'],
    body: 'Choose plastic, paper, glass, metal or e-waste, schedule a doorstep pickup and collect Green Points for your next order.',
    video: '/revive-demo.mp4',
    start: 31,
    end: 37.5,
    caption: 'Recycling pickup / Motion',
  },
  screens: [
    { src: '/images/revive-home.jpg', caption: 'Home / Give things a second life' },
    { src: '/images/case/revive-f4.jpg', caption: 'My Orders / Your order’s impact' },
  ],
  marquee: ['Shop', 'Recycle', 'Earn', 'Repeat', 'Revive'],
  build: {
    lines: ['Designed to', 'ship everywhere.'],
    body: 'Revive went from Figma to a working React store, then onto phones, so one codebase serves the web and Android.',
    rows: [
      {
        kicker: 'Figma / Figma Make',
        title: 'Design',
        description: 'Screens designed in Figma and generated as a React + TypeScript front end with Figma Make.',
      },
      {
        kicker: 'Cart / Checkout / Orders',
        title: 'Commerce flow',
        description: 'Product details, cart, a three-step checkout, order tracking, support chat and recycling pickups.',
      },
      {
        kicker: 'Vercel / Median',
        title: 'Web + Android',
        description: 'Deployed on Vercel and packaged as an Android app with Median, from the same codebase.',
      },
    ],
  },
  stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Figma Make', 'Median'],
  closing: ['Give things', 'a second life.'],
  summary:
    'An eco-friendly shopping app for sustainable and recycled products, built for HSSM301 Product Design at FCRIT and available on the web and Android.',
  links: [
    { label: 'Live Site', href: 'https://revive-mu-khaki.vercel.app/' },
    { label: 'Android App', href: 'https://median.co/share/krlnakm' },
    { label: 'View Source', href: 'https://github.com/angelinaserpes/Revive' },
  ],
  next: { href: '/dakota', title: 'Dakota Coffee', number: '07', image: '/images/dakota.png' },
};

export default function Revive() {
  return <CaseStudy data={data} />;
}
