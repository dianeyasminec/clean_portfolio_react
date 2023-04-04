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
        "	A recipe application has been developed using React.js and Bootstrap, allowing users to explore a wide range of recipes including gluten-free, meats, and fish. The application incorporates a router that facilitates navigation between four distinct components: a section that provides information about the company and its services, an area displaying all recipes retrieved from a built-in data store in array objects, a reviews section where users can view and engage with various reviews, and a help section featuring frequently asked questions and contact information.",
      stack: ['React', 'Bootstrap'],
      sourceCode: 'https://github.com/dianeyasminec/RecipesAPP',
      livePreview: 'https://recipes-five-flame.vercel.app/',
    },

    {
      name: 'Project 2',
      description:
        'Developed an E-commerce website that displays homemade soaps. The technologies used were React, Node, CSS, HTML, and JavaScript. Improve navigation between components with routers and connect the front-end and back-end via JSON file. Users can add to cart, delete from the cart, and update the total price by increasing or decreasing the number of items.',
      stack: [ 'React', 'Bootstrap'],
      sourceCode: 'https://github.com/dianeyasminec/E-commerce-with-React.js',
      livePreview: 'https://e-commerce-with-react-js.vercel.app/',
    },
    
    {
      name: 'Project 3',
      description:
        ' Design a visually appealing one-page website using React and Bootstrap to showcase the biography of author Chimamanda Ngozi Adichie and her renowned books, while implementing a JavaScript function to display the content.',
      stack: ['React', 'Bootstrap'],
      sourceCode: 'https://github.com/dianeyasminec/Chimamanda-Ngozi-Adichie-',
      livePreview: 'https://chimamanda-ngozi-adichie.vercel.app/',
    }
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