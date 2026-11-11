import type { Status } from './status';

export const SITE_URL = 'https://www.gauravahuja.dev';
export const NOTES_URL = 'https://notes.gauravahuja.dev';
export const GITHUB_URL = 'https://github.com/gauravahujame';

export interface Person {
  name: string;
  givenName: string;
  role: string;
  location: string;
  country: string;
  email: string;
  /** First month of professional work, used to compute years of experience. */
  careerStart: string;
  /** Used for <meta name="description"> and social previews. */
  description: string;
}

export interface Link {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  /** Section id on the home page. */
  target: string;
}

export interface CurrentFocus {
  topic: string;
  detail: string;
  status?: Status;
}

export const PERSON: Person = {
  name: 'Gaurav Ahuja',
  givenName: 'Gaurav',
  role: 'Software engineer',
  location: 'New Delhi',
  country: 'India',
  email: 'gauravahuja.me@gmail.com',
  careerStart: '2016-08',
  description:
    'Gaurav Ahuja is a software engineer in New Delhi with over ten years of experience building web and mobile apps, fintech products and engineering teams. He also experiments with AI agents, local language models, homelab infrastructure, electronics and music.'
};

export const SOCIAL_LINKS: Link[] = [
  { label: 'GitHub', href: GITHUB_URL },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gauravahujame' }
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Work', target: 'work' },
  { label: 'Lab', target: 'lab' },
  { label: 'Experience', target: 'experience' },
  { label: 'Writing', target: 'writing' },
  { label: 'Contact', target: 'contact' }
];

/** The "Currently exploring" card in the hero. */
export const CURRENTLY: CurrentFocus[] = [
  { topic: 'Agent orchestration', detail: 'Hermes, OpenClaw', status: 'experimental' },
  { topic: 'Local inference', detail: 'MLX on Apple silicon', status: 'experimental' },
  { topic: 'A pocket AI assistant', detail: 'ESP32-S3', status: 'experimental' },
  { topic: 'Piano', detail: 'and Ableton', status: 'active' }
];

/** Whole years since `careerStart`, at build time. */
export function yearsOfExperience(now: Date = new Date()): number {
  const [year, month] = PERSON.careerStart.split('-').map(Number) as [number, number];
  const months = (now.getFullYear() - year) * 12 + (now.getMonth() + 1 - month);
  return Math.floor(months / 12);
}
