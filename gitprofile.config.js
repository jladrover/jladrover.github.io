// gitprofile.config.js

const config = {
  github: {
    username: 'jladrover', // Your GitHub org/user name. (Required)
    sortBy: 'stars', 
    limit: 6, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'jladrover',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    // website: 'https://arifszn.com',
    phone: '+1 954-279-7779',
    email: 'ja4146@nyu.edu',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Java',
    'C',
    'PostgreSQL',
    'MySQL',
    'Docker',
    'Flask',
    'Git',
    'MongoDB',
    'Neo4j',
    'JavaScript',
    'React.js',
    'Node.js',
    'Express.js',
    'AWS'
  ],
  // experiences: [
  //   {
  //     company: 'Company Name',
  //     position: 'Position',
  //     from: 'September 2021',
  //     to: 'Present',
  //     companyLink: 'https://example.com',
  //   },
  //   {
  //     company: 'Company Name',
  //     position: 'Position',
  //     from: 'July 2019',
  //     to: 'August 2021',
  //     companyLink: 'https://example.com',
  //   },
  // ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'New York University',
      degree: 'B.A. Computer Science, Minor in Mathematics',
      from: '2020',
      to: '2024',
    },
    {
      institution: 'Calvary Christian Academy',
      degree: 'High School Diploma',
      from: '2016',
      to: '2020',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Budgeting Web App',
      description:
        'Financial spending/earnings tracker built through MERN stack and deployed on vercel.',
      imageUrl: 'https://i.ibb.co/PrJJSY3/p1.png',
      link: 'https://budgeting-application.vercel.app/',
    },
    {
      title: 'ML Projects',
      description:
      'Face recognition and signal processing/classification school projects.',
      imageUrl: 'https://i.ibb.co/fXWW2sw/sklearnlogo.png',
      link: 'https://github.com/jladrover/ML-Projects',
    },
    {
      title: 'NLP Projects',
      description:
      'Text preprocessing and character language model projects.',
      imageUrl: 'https://i.ibb.co/CKSkc07/nltk.png',
      link: 'https://github.com/jladrover/NLP-Projects',
    },
    {
      title: 'FAT32 File Recovery Software',
      description:
      'Application that recovers deleted files on a FAT32 file system.',
      imageUrl: 'https://i.ibb.co/2dCX1bV/Untitled-2.png',
      link: 'https://github.com/jladrover/fileRS',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many posts to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a 
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,
};

export default config;
