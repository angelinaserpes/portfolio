// Every item is a real skill or project of Angy's, styled as clothing.
export const slots = [
  {
    key: 'top',
    label: 'Top',
    hint: 'Core skill',
    items: [
      { name: 'The Python Blazer', shape: 'blazer', color: '#2F3E46', caption: 'Tailored for data. AirSense runs on it.' },
      { name: 'The SQL Knit', shape: 'knit', color: '#8C5E58', caption: 'Soft on the outside, joins on the inside.' },
      { name: 'The Figma Crop', shape: 'crop', color: '#C08B5C', caption: 'Cut for interfaces. Every Aurevo screen started here.' },
      { name: 'The Java Trench', shape: 'trench', color: '#6B705C', caption: 'Structured and role-based, like my Secure Access System.' },
    ],
  },
  {
    key: 'bottom',
    label: 'Bottom',
    hint: 'Build style',
    items: [
      { name: 'Clean-Code Cargos', shape: 'cargos', color: '#3D3A36', caption: 'Lots of pockets. Everything in its place.' },
      { name: 'Pixel-Perfect Pleats', shape: 'pleats', color: '#B7A99A', caption: 'Every fold aligned to the grid.' },
      { name: 'Motion-Blur Flares', shape: 'flares', color: '#1B1B1B', caption: 'Framer Motion and GSAP in every step.' },
    ],
  },
  {
    key: 'accessory',
    label: 'Accessory',
    hint: 'Superpower',
    items: [
      { name: 'Data-Viz Earrings', shape: 'earrings', color: '#C9A227', caption: 'Turns numbers into something you would wear.' },
      { name: 'Debugging Shades', shape: 'shades', color: '#111111', caption: 'Spot the bug before it spots you.' },
      { name: 'Prompt-Engineered Tote', shape: 'tote', color: '#A0522D', caption: 'Carries my Google AI certificates everywhere.' },
    ],
  },
];

export const cover = {
  masthead: 'ANGY',
  issue: 'The Creative Technologist Issue · No. 01',
  headline: 'Writes SQL.\nThinks in outfits.',
  dek: 'A computer engineer who is very much into fashion, on building things that look good and work well.',
};
