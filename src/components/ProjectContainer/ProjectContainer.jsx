import uniqid from 'uniqid'
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import './ProjectContainer.css'
import React from 'react'
import PropTypes from 'prop-types';
// const ProjectContainer = ({project}) => (
  function ProjectContainer(props){
  //  console.log(project.name)
   const {
    name, 
    stack, 
    description,
    sourceCode, 
    livePreview
   } = props
    return(
  <div className='project'>
    <h3>{name}</h3>

    <p className='project__description'>{description}</p> 
    {stack && (
      <ul className='project__stack'>
        {stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {sourceCode && (
      <a
        href={sourceCode}
        aria-label='source code'
        className='link link--icon'
        target="_blank" rel="noopener noreferrer"
      >
        <GitHubIcon />
      </a>
    )}

    {livePreview && (
      <a
        href={livePreview}
        aria-label='live preview'
        className='link link--icon'
        target="_blank" rel="noopener noreferrer"
      >
        <LaunchIcon />
      </a>
    )}
  </div>
  )}

   // const {name, description,stack,sourceCode, livePreview} = project
  ProjectContainer.propTypes = {
    name: PropTypes.string.isRequired ,
description: PropTypes.string.isRequired,
stack: PropTypes.arrayOf(PropTypes.string),
sourceCode: PropTypes.string.isRequired,
livePreview:PropTypes.string.isRequired
  }

export default ProjectContainer;