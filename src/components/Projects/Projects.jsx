import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'
import React from 'react'

function Projects () {
  if (!projects.length) return null
console.log(projects)
  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Projects</h2>

      <div className='projects__grid'>
        {projects.map((project) => (
         
          <ProjectContainer key={uniqid()} 
          name={project.name}
           stack={project.stack} 
           description={project.description}
           sourceCode={project.sourceCode}
           livePreview={project.livePreview}
           />
        ))}
      </div>
    </section>
  )
}

export default Projects