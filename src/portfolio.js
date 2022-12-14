const header = {
    // all the properties are optional - can be left empty or deleted
    homepage: '',
    title: 'CD.',
  }
  
  const about = {
  
    name: 'Diane Compaoré',
    role: 'Front End Engineer',
    description:
      'My name is Diane Compaore, I am seeking a JavaScript/React developer position. I possess an associate in health sciences from Houston Community College. I hold a certificate in software engineering from Flatiron school. I am specializing in html, CSS, JavaScript, React and bootstrap .',
    resume: 'https://example.com',
    social: {
      linkedin: 'https://www.linkedin.com/in/cd8/',
      github: 'https://github.com/dianeyasminec',
    },
  }
  
  const projects = [
    
    {
      name: 'Project 1',
      description:
        'Created an E-commerce application from scratch that displays a list of soaps from a db.json file. Users are able to add to the cart, delete from the cart, and update the total price by increasing/decreasing the number of items.',
      stack: [ 'React', 'Bootstrap'],
      sourceCode: 'https://github.com/dianeyasminec/E-commerce-with-React.js',
      livePreview: 'https://e-commerce-with-react-js.vercel.app/',
    },
    {
      name: 90,
      description:
        'Developed a song lyrics app that allows users to search through a fetch API for any artist, then display 10 popular songs of the artist. Routers are integrated into the application to facilitate the navigation between the components.',
      stack: ['React', 'Bootstrap'],
      sourceCode: 'https://github.com/dianeyasminec/Lyrics_generator_React',
      livePreview: 'https://lyrics-generator-react.vercel.app/',
    },
    {
      name: 'Project 3',
      description:
        'Single page application built entirely with react.js and Bootstrap 5. Biography of author Chimamanda Ngozi Adichie and her popular books.',
      stack: ['React', 'Bootstrap'],
      sourceCode: 'https://github.com/dianeyasminec/Chimamanda-Ngozi-Adichie-',
      livePreview: 'https://chimamanda-ngozi-adichie.vercel.app/',
    },
  ]
  
  const skills = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Bootstrap',
    'Node.js',
    'Material UI',
    'Git'
  ]
  
  const contact = {
    
    email: 'dianeyasminec60@gmail.com',
  }
  
  export { header, about, projects, skills, contact }