const header = {
    // all the properties are optional - can be left empty or deleted
    homepage: 'https://rajshekhar26.github.io/cleanfolio',
    title: 'CD.',
  }
  
  const about = {
    // all the properties are optional - can be left empty or deleted
    name: 'Diane Compaoré',
    role: 'Front End Engineer',
    description:
      'My name is Diane Compaore, I am seeking a JavaScript/React developer position. I possess an associate in health sciences from Houston Community College. I hold a certificate in software engineering from Flatiron school. I am specializing in html, CSS, JavaScript, React and bootstrap .',
    resume: 'https://example.com',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
  }
  
  const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
      name: 'Project 1',
      description:
        'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
      stack: ['SASS', 'TypeScript', 'React'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
    },
    {
      name: 'Project 2',
      description:
        'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
      stack: ['SASS', 'TypeScript', 'React'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
    },
    {
      name: 'Project 3',
      description:
        'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
      stack: ['SASS', 'TypeScript', 'React'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
    },
  ]
  
  const skills = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Redux',
    'SASS',
    'Material UI',
    'Git',
    'CI/CD',
    'Jest',
    'Enzyme',
  ]
  
  const contact = {
    // email is optional - if left empty Contact section won't show up
    email: 'johnsmith@mail.com',
  }
  
  export { header, about, projects, skills, contact }