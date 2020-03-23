module.exports = {
  siteTitle: 'Mayank Mohindra | Software Developer',
  siteDescription:
    'Mayank Mohindra is a software engineer based in Bengaluru, BTech in Computer Science. He specializes in developing exceptional, high-quality websites and software applications.',
  siteKeywords:
    'Mayank Mohindra, Mayank, Mohindra, mayankmtg, software engineer, software developer, front-end engineer, web developer, javascript, indian, indian coder, coder, developer',
  siteUrl: 'TODO::',
  siteLanguage: 'en_US',
  googleAnalyticsID: '',
  googleVerification: '',
  name: 'Mayank Mohindra',
  location: 'Bengaluru, India',
  email: 'mayankmohindra06@gmail.com',
  github: 'https://github.com/mayankmtg',
  twitterHandle: '@',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/mayankmtg',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/mayank-mohindra-03ab7110b/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
