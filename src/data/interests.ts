/** Which illustration an interest shows. Each maps to a component in src/components/beyond. */
export type InterestVisual = 'piano' | 'board' | 'workbench';

export interface Interest {
  id: string;
  title: string;
  body: string;
  /** Small aside in monospace, e.g. the gear involved. */
  aside: string;
  visual: InterestVisual;
  link?: { label: string; href: string };
}

export const INTERESTS: Interest[] = [
  {
    id: 'music',
    title: 'Music',
    body: 'I’m learning piano and music production in Ableton. What keeps me hooked is how much maths sits under music theory, and how naturally code can write it.',
    aside: 'Digital piano · MIDI controller · Ableton',
    visual: 'piano',
    link: { label: 'Why twelve notes?', href: 'https://notes.gauravahuja.dev/music/why-twelve-notes' }
  },
  {
    id: 'electronics',
    title: 'Electronics',
    body: 'Small boards and sensors. I like that hardware forces honest trade-offs: power, size and latency are all visible. Lately that means building physical interfaces for AI.',
    aside: 'ESP32 · embedded systems · IoT',
    visual: 'board'
  },
  {
    id: 'making',
    title: 'Making & automation',
    body: 'Most of my side projects start as an annoyance at home or at my desk. A script, a self-hosted service or a smart-home rule usually fixes it, and sometimes it turns into a real tool.',
    aside: 'Developer utilities · self-hosting · smart home',
    visual: 'workbench'
  }
];
