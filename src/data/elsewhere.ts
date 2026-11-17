import type { ImageMetadata } from 'astro';
import pragmaticProgrammer from '../assets/elsewhere/covers/pragmatic-programmer.jpg';
import designOfEverydayThings from '../assets/elsewhere/covers/design-of-everyday-things.jpg';
import surelyYoureJoking from '../assets/elsewhere/covers/surely-youre-joking.jpg';
import hitchhikersGuide from '../assets/elsewhere/covers/hitchhikers-guide.jpg';
import interstellarSoundtrack from '../assets/elsewhere/covers/interstellar-soundtrack.jpg';
import randomAccessMemories from '../assets/elsewhere/covers/random-access-memories.jpg';
import darkSideOfTheMoon from '../assets/elsewhere/covers/dark-side-of-the-moon.jpg';
import unaMattina from '../assets/elsewhere/covers/una-mattina.jpg';
import pudding from '../assets/elsewhere/favicons/pudding.png';
import nealFun from '../assets/elsewhere/favicons/neal-fun.png';
import ncase from '../assets/elsewhere/favicons/ncase.png';
import ciechanowski from '../assets/elsewhere/favicons/ciechanowski.png';
import marginalian from '../assets/elsewhere/favicons/marginalian.png';
import codingTrain from '../assets/elsewhere/favicons/coding-train.png';

/*
 * "Elsewhere": books, films, music, people and websites, shown in the section between
 * Beyond the Code and From the Garden.
 *
 * ⚠️ SAMPLE SELECTIONS, TO BE REVIEWED. Every entry below is a suggested pick that
 * fits Gaurav's interests, not a confirmed favourite, and the annotations are
 * suggested editorial copy, not autobiography. Swap, rewrite or delete freely.
 * Once the list is confirmed, update `ELSEWHERE_CATEGORIES[*].label` (currently
 * neutral "worth sharing" wording) if you want more personal copy.
 *
 * Artwork is stored locally so the page makes no third-party requests:
 * - Book covers: Open Library Covers API (covers.openlibrary.org), by cover id.
 * - Album covers: Cover Art Archive (coverartarchive.org), by MusicBrainz release group.
 * - Favicons: each site's own icon (neal.fun's via DuckDuckGo's icon service,
 *   because the site blocks scripted requests).
 * - Films have no poster: there is no keyless, permitted poster source, so they
 *   use the typographic title card. Add `image` to an entry to show artwork.
 * - People have no portrait and show a monogram. If you add one, use a freely
 *   licensed photo (e.g. Wikimedia Commons) and credit it as its licence requires.
 *
 * Exception: the People entries are Gaurav's own picks, not samples. Their
 * annotations describe each person's work, not Gaurav's experience of it.
 * Covers are shown as small thumbnails that identify and link to the work.
 */

export type ElsewhereCategory = 'books' | 'films' | 'music' | 'people' | 'web';

/** Reserved for later, e.g. marking something as currently reading/listening. */
export type ElsewhereStatus = 'current' | 'revisiting' | 'queued';

export interface ElsewhereItem {
  /** Unique across all categories; also used for "Currently enjoying". */
  id: string;
  category: ElsewhereCategory;
  title: string;
  /** Author, director or artist. For people, what they do; for websites, who runs it. */
  creator?: string;
  year?: number;
  /** One short line. Observant, a little opinionated, no superlatives. */
  annotation: string;
  /** Local asset. Books/films use ~2:3 art, music 1:1, websites a square favicon. */
  image?: ImageMetadata;
  /** Alt text for the artwork. Defaults to "Cover of <title>". */
  imageAlt?: string;
  url: string;
  featured?: boolean;
  /** Lower comes first; entries without it keep their order in the list. */
  order?: number;
  status?: ElsewhereStatus;
}

export interface ElsewhereCategoryInfo {
  id: ElsewhereCategory;
  /** Tab label. */
  tab: string;
  /** Small label above the panel's list. */
  label: string;
}

export const ELSEWHERE_CATEGORIES: ElsewhereCategoryInfo[] = [
  { id: 'books', tab: 'Books', label: 'A few books worth sharing' },
  { id: 'films', tab: 'Films', label: 'A few films worth sharing' },
  { id: 'music', tab: 'Music', label: 'A few records worth sharing' },
  { id: 'people', tab: 'People', label: 'People who’ve shaped how I think' },
  { id: 'web', tab: 'Web', label: 'Internet rabbit holes' }
];

/**
 * Optional "Currently enjoying" line above the tabs. Leave as `null` until there
 * is a real current pick; set `itemId` to any id below to show it.
 */
export const CURRENTLY_ENJOYING: { itemId: string; note?: string } | null = null;

export const ELSEWHERE: ElsewhereItem[] = [
  // ── Books ──
  {
    id: 'pragmatic-programmer',
    category: 'books',
    title: 'The Pragmatic Programmer',
    creator: 'Andrew Hunt & David Thomas',
    annotation: 'Good engineering is less about clever code and more about developing good judgment.',
    image: pragmaticProgrammer,
    url: 'https://en.wikipedia.org/wiki/The_Pragmatic_Programmer'
  },
  {
    id: 'design-of-everyday-things',
    category: 'books',
    title: 'The Design of Everyday Things',
    creator: 'Don Norman',
    annotation: 'A reminder that when something is difficult to use, the problem isn’t always the user.',
    image: designOfEverydayThings,
    url: 'https://en.wikipedia.org/wiki/The_Design_of_Everyday_Things'
  },
  {
    id: 'surely-youre-joking',
    category: 'books',
    title: 'Surely You’re Joking, Mr. Feynman!',
    creator: 'Richard P. Feynman',
    annotation: 'Curiosity, mischief, and the pleasure of figuring things out.',
    image: surelyYoureJoking,
    url: 'https://en.wikipedia.org/wiki/Surely_You%27re_Joking,_Mr._Feynman!'
  },
  {
    id: 'hitchhikers-guide',
    category: 'books',
    title: 'The Hitchhiker’s Guide to the Galaxy',
    creator: 'Douglas Adams',
    annotation: 'Absurdity, philosophy, and the occasional reminder not to panic.',
    image: hitchhikersGuide,
    url: 'https://en.wikipedia.org/wiki/The_Hitchhiker%27s_Guide_to_the_Galaxy_(novel)'
  },

  // ── Films ──
  {
    id: 'interstellar',
    category: 'films',
    title: 'Interstellar',
    creator: 'Christopher Nolan',
    year: 2014,
    annotation: 'Big questions, impossible distances, and a soundtrack that does half the storytelling.',
    url: 'https://en.wikipedia.org/wiki/Interstellar_(film)'
  },
  {
    id: 'the-matrix',
    category: 'films',
    title: 'The Matrix',
    creator: 'Lana & Lilly Wachowski',
    year: 1999,
    annotation: 'Reality, simulation, and one of cinema’s most memorable rabbit holes.',
    url: 'https://en.wikipedia.org/wiki/The_Matrix'
  },
  {
    id: 'her',
    category: 'films',
    title: 'Her',
    creator: 'Spike Jonze',
    year: 2013,
    annotation: 'An unusually thoughtful look at technology, connection, and what makes us human.',
    url: 'https://en.wikipedia.org/wiki/Her_(film)'
  },
  {
    id: 'the-prestige',
    category: 'films',
    title: 'The Prestige',
    creator: 'Christopher Nolan',
    year: 2006,
    annotation: 'Obsession, ingenuity, and the cost of wanting to understand every trick.',
    url: 'https://en.wikipedia.org/wiki/The_Prestige_(film)'
  },

  // ── Music ──
  {
    id: 'interstellar-soundtrack',
    category: 'music',
    title: 'Interstellar (Original Motion Picture Soundtrack)',
    creator: 'Hans Zimmer',
    year: 2014,
    annotation: 'An organ, a few repeating motifs, and an extraordinary sense of scale.',
    image: interstellarSoundtrack,
    url: 'https://en.wikipedia.org/wiki/Interstellar_(soundtrack)'
  },
  {
    id: 'random-access-memories',
    category: 'music',
    title: 'Random Access Memories',
    creator: 'Daft Punk',
    year: 2013,
    annotation: 'Electronic music with an unmistakably human heartbeat.',
    image: randomAccessMemories,
    url: 'https://en.wikipedia.org/wiki/Random_Access_Memories'
  },
  {
    id: 'dark-side-of-the-moon',
    category: 'music',
    title: 'The Dark Side of the Moon',
    creator: 'Pink Floyd',
    year: 1973,
    annotation: 'An album that rewards listening from beginning to end.',
    image: darkSideOfTheMoon,
    url: 'https://en.wikipedia.org/wiki/The_Dark_Side_of_the_Moon'
  },
  {
    id: 'una-mattina',
    category: 'music',
    title: 'Una Mattina',
    creator: 'Ludovico Einaudi',
    year: 2004,
    annotation: 'Proof that a simple piano idea can carry an enormous amount of emotion.',
    image: unaMattina,
    url: 'https://en.wikipedia.org/wiki/Una_Mattina'
  },

  // ── People (Gaurav's own picks) ──
  {
    id: 'terence-mckenna',
    category: 'people',
    title: 'Terence McKenna',
    creator: 'Ethnobotanist and writer · 1946–2000',
    annotation: 'Botany, language, and consciousness, talked about as if they were one subject.',
    url: 'https://en.wikipedia.org/wiki/Terence_McKenna'
  },
  {
    id: 'jordan-peterson',
    category: 'people',
    title: 'Jordan Peterson',
    creator: 'Clinical psychologist · b. 1962',
    annotation: 'Myth, psychology, and the argument that meaning starts with taking on responsibility.',
    url: 'https://en.wikipedia.org/wiki/Jordan_Peterson'
  },
  {
    id: 'hamilton-morris',
    category: 'people',
    title: 'Hamilton Morris',
    creator: 'Chemist and journalist · b. 1987',
    annotation: 'Pharmacology approached the way a chemist would, with patience and a lot of curiosity.',
    url: 'https://en.wikipedia.org/wiki/Hamilton_Morris'
  },
  {
    id: 'alan-watts',
    category: 'people',
    title: 'Alan Watts',
    creator: 'Philosopher and writer · 1915–1973',
    annotation: 'Eastern philosophy explained with a grin, and a good case for taking yourself less seriously.',
    url: 'https://en.wikipedia.org/wiki/Alan_Watts'
  },

  // ── Web ──
  {
    id: 'the-pudding',
    category: 'web',
    title: 'The Pudding',
    annotation: 'Visual storytelling that makes data feel unexpectedly human.',
    image: pudding,
    url: 'https://pudding.cool'
  },
  {
    id: 'neal-fun',
    category: 'web',
    title: 'Neal.fun',
    creator: 'Neal Agarwal',
    annotation: 'A reminder that the web can still be weird, playful, and wonderful.',
    image: nealFun,
    url: 'https://neal.fun'
  },
  {
    id: 'nicky-case',
    category: 'web',
    title: 'Nicky Case',
    annotation: 'Interactive explanations that make complicated ideas feel intuitive.',
    image: ncase,
    url: 'https://ncase.me'
  },
  {
    id: 'bartosz-ciechanowski',
    category: 'web',
    title: 'Bartosz Ciechanowski',
    annotation: 'Some of the most beautifully explained engineering concepts on the internet.',
    image: ciechanowski,
    url: 'https://ciechanow.ski'
  },
  {
    id: 'the-marginalian',
    category: 'web',
    title: 'The Marginalian',
    creator: 'Maria Popova',
    annotation: 'A rabbit hole of literature, philosophy, creativity, and the human condition.',
    image: marginalian,
    url: 'https://www.themarginalian.org'
  },
  {
    id: 'the-coding-train',
    category: 'web',
    title: 'The Coding Train',
    creator: 'Daniel Shiffman',
    annotation: 'Creative coding with a contagious sense of curiosity.',
    image: codingTrain,
    url: 'https://thecodingtrain.com'
  }
];

/** Entries for one category, `order` first, then list order. */
export function itemsFor(category: ElsewhereCategory): ElsewhereItem[] {
  return ELSEWHERE.filter((item) => item.category === category)
    .map((item, index) => ({ item, index }))
    .sort((a, b) => (a.item.order ?? Infinity) - (b.item.order ?? Infinity) || a.index - b.index)
    .map(({ item }) => item);
}
