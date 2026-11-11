import { NOTES_URL } from './profile';

/** Growth stage tag used in the garden. */
export type Stage = 'seedling' | 'budding' | 'evergreen';

export interface Article {
  title: string;
  /** Opening line of the note, lightly trimmed. */
  excerpt: string;
  topic: string;
  stage: Stage;
  href: string;
  /** ISO date. The garden doesn't publish dates yet, so leave undefined until it does. */
  date?: string;
}

export interface GardenSection {
  title: string;
  description: string;
  href: string;
}

// Selected notes. Each URL was checked against notes.gauravahuja.dev. The garden's RSS feed
// lists folder and tag pages without descriptions, so this list is curated by hand.
export const ARTICLES: Article[] = [
  {
    title: 'Deep modules',
    excerpt: 'A deep module gives you a lot of functionality behind a small, simple interface.',
    topic: 'Software design',
    stage: 'evergreen',
    href: `${NOTES_URL}/tech/deep-modules`
  },
  {
    title: 'Why twelve notes?',
    excerpt:
      'Western music divides the octave into 12 notes. It’s the best small compromise between two ratios that don’t fit together.',
    topic: 'Music · Math',
    stage: 'evergreen',
    href: `${NOTES_URL}/music/why-twelve-notes`
  },
  {
    title: 'Home automation should be boring',
    excerpt: 'The best smart home is one nobody in the house notices.',
    topic: 'Systems',
    stage: 'seedling',
    href: `${NOTES_URL}/tech/home-automation-should-be-boring`
  },
  {
    title: 'Digital gardens',
    excerpt:
      'A personal website made of interlinked notes that you tend over time, rather than a feed of dated, finished posts.',
    topic: 'Writing',
    stage: 'evergreen',
    href: `${NOTES_URL}/ideas/digital-gardens`
  }
];

export const GARDEN_SECTIONS: GardenSection[] = [
  { title: 'Ideas', description: 'How to think, write, and build.', href: `${NOTES_URL}/ideas/` },
  { title: 'Tech', description: 'Software design and everyday tools.', href: `${NOTES_URL}/tech/` },
  { title: 'Music', description: 'The math and code behind sound.', href: `${NOTES_URL}/music/` }
];
