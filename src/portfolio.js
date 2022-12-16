const header = {
    
    homepage: '',
    title: 'DC.',
  }
  
  const about = {
  
    name: 'Diane Compaoré',
    role: 'Front End Engineer',
    description:
      'My name is Diane Compaoré, I am looking for a job as a JavaScript/React Engineer. I have a certificate in software engineering from the Flatiron School Bootcamp. I specialize in HTML, CSS, JavaScript, React, Bootstrap, Node.js, VScode and French.',
    resume: '',
    social: {
      linkedin: 'https://www.linkedin.com/in/cd8/',
      github: 'https://github.com/dianeyasminec',
    },
  }
  
  const projects = [
    
    {
      name: 'Project 1',
      description:
        'Developed an E-commerce website that displays homemade soaps. The technologies used were React, Node, CSS, HTML, and JavaScript. Improve navigation between components with routers and connect the front-end and back-end via JSON file. Users can add to cart, delete from the cart, and update the total price by increasing or decreasing the number of items.',
      stack: [ 'React', 'Bootstrap'],
      sourceCode: 'https://github.com/dianeyasminec/E-commerce-with-React.js',
      livePreview: 'https://e-commerce-with-react-js.vercel.app/',
    },
    {
      name: 'Project 2',
      description:
        "	Recreated and improved the Genius website, which is the world’s biggest collection of song lyrics and musical knowledge.	Implemented the front- end using React, the site fetches data from the search API and uploads it on the page when the user enters the artists name. Integrated lyrics search API to search for, filter and display 10 of the design artist's most popular songs. Utilized routers to improve navigation between components",
      stack: ['React', 'Bootstrap'],
      sourceCode: 'https://github.com/dianeyasminec/Lyrics_generator_React',
      livePreview: 'https://lyrics-generator-react.vercel.app/',
    },
    {
      name: 'Project 3',
      description:
        'Generate a single page website built with React and Bootstrap. Biography of author Chimamanda Ngozi Adichie and her popular books displayed through a JavaScript method.',
      stack: ['React', 'Bootstrap'],
      sourceCode: 'https://github.com/dianeyasminec/Chimamanda-Ngozi-Adichie-',
      livePreview: 'https://chimamanda-ngozi-adichie.vercel.app/',
    },
  ]
  
  const skills = [
    
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