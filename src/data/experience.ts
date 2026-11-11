export interface Job {
  company: string;
  /** Titles in order, earliest first, when the role changed at the same company. */
  roles: string[];
  /** YYYY-MM */
  start: string;
  /** YYYY-MM, or undefined for the current role. */
  end?: string;
  summary: string;
  highlights: string[];
  stack: string[];
  /**
   * Measurable outcomes, for later. Not rendered while empty.
   * TODO(gaurav): add verified numbers (team size, apps shipped, users, releases) if you want them shown.
   */
  outcomes: string[];
}

export interface Degree {
  degree: string;
  school: string;
  start: string;
  end: string;
}

export interface Capability {
  title: string;
  body: string;
}

/** The summary above the timeline: what ten years of work adds up to. */
export const CAPABILITIES: Capability[] = [
  {
    title: 'Product engineering',
    body: 'Web and mobile apps in React, React Native, Node.js and TypeScript, for the web, Android, iOS and embedded WebViews.'
  },
  {
    title: 'Fintech',
    body: 'Payment flows, digital wallets and mobile banking, where authentication, state and edge cases decide whether people trust the app.'
  },
  {
    title: 'Leadership',
    body: 'Leading teams, making architecture calls and taking products from the first commit through production.'
  }
];

export const JOBS: Job[] = [
  {
    company: 'Daffodil Software',
    roles: ['Senior Associate IT', 'Associate Manager'],
    start: '2019-08',
    // TODO(gaurav): confirm this is still your current role. Set `end` if it isn't.
    summary:
      'Joined as Senior Associate IT and grew into Associate Manager. I build React Native fintech apps, including one for a client in Mexico, and own them from development to deployment.',
    highlights: [
      'Fintech apps for web and mobile, built and shipped end to end.',
      'Lead engineering teams across several projects.',
      'Make architecture decisions as projects grow.'
    ],
    stack: ['React Native', 'React', 'TypeScript', 'Node.js'],
    outcomes: []
  },
  {
    company: 'Tweedle Technologies',
    roles: ['Software Developer'],
    start: '2018-01',
    end: '2019-08',
    summary:
      'An early-stage product startup. I helped build the product from the ground up and learned how a product takes shape when there is no existing code to lean on.',
    highlights: ['React Native and GraphQL on the client.', 'AWS serverless infrastructure on the back end.'],
    stack: ['React Native', 'GraphQL', 'AWS Lambda'],
    outcomes: []
  },
  {
    company: 'Jellyfish Technologies',
    roles: ['Intern', 'Jr. Software Developer'],
    start: '2016-08',
    end: '2017-12',
    summary:
      'Started as an intern and stayed on as a developer, working on the Java backend of AppDirect, a subscription commerce platform.',
    highlights: ['Enterprise Java services with Spring and Hibernate over SQL.'],
    stack: ['Java', 'Spring', 'Hibernate', 'SQL'],
    outcomes: []
  }
];

export const EDUCATION: Degree[] = [
  { degree: 'Master of Computer Applications', school: 'Indraprastha University', start: '2013', end: '2016' },
  { degree: 'Bachelor of Computer Applications', school: 'Indraprastha University', start: '2010', end: '2013' }
];
