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
    body: 'Payments, wallets, credit and deposit products, where authentication, state handling and edge cases decide whether people trust the app.'
  },
  {
    title: 'Leadership',
    body: 'Leading frontend teams, making architecture decisions and taking products from the first commit to production.'
  }
];

export const JOBS: Job[] = [
  {
    company: 'FalconFS',
    roles: ['Team Lead, Frontend'],
    start: '2023-04',
    summary:
      'An Indian fintech company that builds lending, payments and banking products for partners such as Paytm, BharatPe and Jana Small Finance Bank. I lead the frontend team and build the React Native apps and React web apps behind those products.',
    highlights: [
      'Credit Line on UPI, prepaid wallets, credit cards and fixed deposits.',
      'Apps and web journeys built for several partner brands.',
      'Lead the frontend team and its architecture decisions.'
    ],
    stack: ['React Native', 'React'],
    outcomes: []
  },
  {
    company: 'Hola Cash',
    roles: ['Senior Frontend Engineer'],
    start: '2022-07',
    end: '2023-04',
    summary:
      'A Mexican fintech company. I worked on the React Native and React apps for its digital payments wallet, built for the Mexican market.',
    highlights: ['Peer-to-peer payments and bill payments.', 'Mobile app in React Native, web app in React.'],
    stack: ['React Native', 'React'],
    outcomes: []
  },
  {
    company: 'Daffodil Software',
    roles: ['Senior Associate IT', 'Associate Manager'],
    start: '2019-08',
    end: '2022-07',
    summary:
      'Joined as Senior Associate IT and was promoted to Associate Manager. I built React Native fintech apps for clients and owned them from development through deployment.',
    highlights: [
      'Built and shipped fintech apps for web and mobile.',
      'Led engineering teams across several client projects.',
      'Made architecture decisions as projects grew.'
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
      'An early-stage product startup. I helped build its product from scratch and learned how software takes shape when there is no existing codebase to lean on.',
    highlights: ['React Native and GraphQL on the client.', 'Serverless AWS infrastructure on the back end.'],
    stack: ['React Native', 'GraphQL', 'AWS Lambda'],
    outcomes: []
  },
  {
    company: 'Jellyfish Technologies',
    roles: ['Intern', 'Jr. Software Developer'],
    start: '2016-08',
    end: '2017-12',
    summary:
      'Started as an intern and stayed on as a developer, working on the Java back end of AppDirect, a subscription commerce platform.',
    highlights: ['Enterprise Java services built with Spring and Hibernate on SQL databases.'],
    stack: ['Java', 'Spring', 'Hibernate', 'SQL'],
    outcomes: []
  }
];

export const EDUCATION: Degree[] = [
  { degree: 'Master of Computer Applications', school: 'Indraprastha University', start: '2013', end: '2016' },
  { degree: 'Bachelor of Computer Applications', school: 'Indraprastha University', start: '2010', end: '2013' }
];
