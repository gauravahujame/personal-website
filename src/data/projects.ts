import type { Status } from './status';
import { NOTES_URL } from './profile';

/** Which illustration a project card shows. Each maps to a component in src/components/diagrams. */
export type ProjectVisual = 'gateway' | 'tv-reader' | 'zx-workspace' | 'garden-graph';

/** Card size in the Selected Work layout. */
export type ProjectLayout = 'feature' | 'half' | 'wide';

export interface Project {
  id: string;
  name: string;
  /** One line: what it is. */
  tagline: string;
  /** Why it exists. */
  why: string;
  /** Technical challenges, shown under "How it works". Facts only, from the repository README. */
  details: string[];
  stack: string[];
  status?: Status;
  /** Short verified note shown next to the status, e.g. "Live". */
  statusNote?: string;
  links: { label: string; href: string }[];
  visual: ProjectVisual;
  layout: ProjectLayout;
}

// Facts below come from each repository's README and GitHub metadata.
export const PROJECTS: Project[] = [
  {
    id: 'mlx-gateway',
    name: 'MLX Gateway',
    tagline: 'An OpenAI-compatible gateway that routes inference across Apple silicon machines.',
    why: 'I run local models on more than one Mac. Instead of pointing every app at one machine, the gateway picks a node for each request and falls back to cloud providers when the local nodes are down.',
    details: [
      'Hardware-aware routing: larger models go to the M2, smaller ones to the M1.',
      'Chooses among healthy nodes by fewest active requests, with latency as the tiebreaker.',
      'Polls node health and falls back M1 → M2 → LiteLLM cloud providers, with retries.',
      'Passes streaming (SSE) responses through and serves chat, models and audio endpoints.'
    ],
    stack: ['TypeScript', 'Bun', 'Docker', 'MLX', 'LiteLLM'],
    links: [{ label: 'Repository', href: 'https://github.com/gauravahujame/mlx-gateway' }],
    visual: 'gateway',
    layout: 'feature'
  },
  {
    id: 'couch-reader',
    name: 'Couch Reader',
    tagline: 'A native Android TV reader for your own DRM-free EPUBs and PDFs.',
    why: 'A TV is a big, comfortable screen that already sits in the living room. Reading on it needs an app built around a remote control, not a touchscreen.',
    details: [
      'Left and right turn pages; OK opens chapter, progress, text size and theme controls.',
      'Books arrive from a phone or laptop on the home network: scan a QR code shown on the TV and upload.',
      'Upload tokens expire and the QR code renews every ten minutes. No accounts, analytics or cloud storage.',
      'EPUB locations are indexed once in the background, so progress survives text-size changes.'
    ],
    stack: ['Kotlin', 'Android TV', 'SQLite', 'WebView'],
    status: 'active',
    statusNote: 'In development',
    links: [{ label: 'Repository', href: 'https://github.com/gauravahujame/couch-reader' }],
    visual: 'tv-reader',
    layout: 'half'
  },
  {
    id: 'zx',
    name: 'zx',
    tagline: 'A command center and job scheduler for scripts on macOS.',
    why: 'Scripts, scheduled jobs and small local APIs tend to end up scattered across a machine. zx gives them one home under ~/.zx and runs them for you.',
    details: [
      'Jobs describe their own schedule in comment blocks; new jobs are picked up as they are added.',
      'Interval, boot and manual jobs, written in shell, Python, JavaScript or TypeScript.',
      'Drop a Python file into ~/.zx/api and it becomes a REST endpoint, with hot reload.',
      'Runs as a macOS LaunchAgent, and ships agent skills that return JSON.'
    ],
    stack: ['Python', 'Shell', 'launchd', 'uv'],
    links: [{ label: 'Repository', href: 'https://github.com/gauravahujame/zx' }],
    visual: 'zx-workspace',
    layout: 'half'
  },
  {
    id: 'digital-garden',
    name: 'Digital garden',
    tagline: 'My public notebook: linked notes on software, systems and music, built on Quartz.',
    why: 'Blog posts ask for a finished thought. A garden lets a note start rough and get better, and links make the connections between ideas visible.',
    details: [
      'A custom type system and theme on top of Quartz v5, documented as a small design language.',
      'Notes carry a growth stage (seedling, budding, evergreen) so readers know how settled they are.',
      'This site shares its tokens, fonts and colours, so the two read as one place.'
    ],
    stack: ['TypeScript', 'Quartz', 'SCSS', 'Markdown'],
    status: 'active',
    statusNote: 'Live',
    links: [
      { label: 'Visit the garden', href: NOTES_URL },
      { label: 'Repository', href: 'https://github.com/gauravahujame/digital-garden' }
    ],
    visual: 'garden-graph',
    layout: 'wide'
  }
];
