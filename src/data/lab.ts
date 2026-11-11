import type { Status } from './status';

/** Which illustration an entry shows. Each maps to a component in src/components/diagrams. */
export type LabVisual = 'homelab' | 'agent-loop' | 'inference' | 'pocket-assistant' | 'music-roll' | 'home';

/** Grid footprint in The Lab layout. */
export type LabSize = 'large' | 'medium' | 'small';

export interface LabEntry {
  id: string;
  title: string;
  summary: string;
  /** Short topics shown as monospace annotations. */
  topics: string[];
  status?: Status;
  visual?: LabVisual;
  size: LabSize;
  link?: { label: string; href: string };
}

export const LAB: LabEntry[] = [
  {
    id: 'homelab',
    title: 'The homelab',
    summary:
      'Linux and Docker running most of my self-hosted life: containers behind a reverse proxy, DNS and networking services, databases, automation and monitoring. It’s where I learn how services fail, and how to make them boring again.',
    topics: ['Linux', 'Docker', 'Reverse proxy', 'DNS', 'Monitoring', 'Self-hosted Git & CI'],
    status: 'active',
    visual: 'homelab',
    size: 'large'
  },
  {
    id: 'agents',
    title: 'Autonomous agents',
    summary:
      'I run agents like Hermes and OpenClaw against real tasks to see where they hold up: calling tools, driving a browser, remembering context across sessions and switching between local and cloud models.',
    topics: ['Tool calling', 'Orchestration', 'Browser automation', 'Memory'],
    status: 'experimental',
    visual: 'agent-loop',
    size: 'medium'
  },
  {
    id: 'local-inference',
    title: 'Local inference',
    summary:
      'Running quantized language models on Apple silicon with MLX. Most of the work is fitting models into unified memory, keeping tokens per second usable and deciding which requests stay local.',
    topics: ['MLX', 'Quantization', 'Model serving', 'Routing'],
    status: 'experimental',
    visual: 'inference',
    size: 'medium',
    link: { label: 'See MLX Gateway', href: '#project-mlx-gateway' }
  },
  {
    id: 'pocket-assistant',
    title: 'A pocket AI assistant',
    summary:
      'A work in progress: an ESP32-S3 with a microphone, a small display and a battery, connected to an AI assistant. The open questions are power, latency and what a tiny screen should show.',
    topics: ['ESP32-S3', 'Microphone', 'Display', 'Battery'],
    status: 'experimental',
    visual: 'pocket-assistant',
    size: 'large'
  },
  {
    id: 'generative-music',
    title: 'Generative music',
    summary:
      'Code that writes music: a DittyToy playground for generative pieces, MIDI experiments and local music-generation models.',
    topics: ['MIDI', 'DittyToy', 'Audio', 'Local models'],
    status: 'experimental',
    visual: 'music-roll',
    size: 'small',
    link: { label: 'DittyToy playground', href: 'https://github.com/gauravahujame/dittylab' }
  },
  {
    id: 'home-automation',
    title: 'Home automation',
    summary:
      'Smart-home devices and integrations, held to one rule: nobody else in the house should have to notice the automation.',
    topics: ['Integrations', 'Sensors', 'Automations'],
    status: 'experimental',
    visual: 'home',
    size: 'small',
    link: { label: 'Read the note', href: 'https://notes.gauravahuja.dev/tech/home-automation-should-be-boring' }
  }
];
