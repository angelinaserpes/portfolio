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
  title: { absolute: 'Angelina Serpes | Portfolio' },
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