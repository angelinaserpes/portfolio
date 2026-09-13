import {
  Contact,
  Description,
  Header,
  Identity,
  Navbar,
  Project,
  Thumbnail,
  Transition,
} from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Angelina Serpes | Portfolio',
  description:
    'The personal portfolio of Angelina Serpes — projects, creative work, and digital experiences.',
};

export default function Home() {
  return (
    <Transition>
      <Navbar />

      <Header />

      <main>
        <Description />
        <Identity />
        <Thumbnail />
        <Project />
      </main>

      <Contact />
    </Transition>
  );
}