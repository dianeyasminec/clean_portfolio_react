import uniqid from 'uniqid'
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import './ProjectContainer.css'
import React from 'react'
import PropTypes from 'prop-types';
// const ProjectContainer = ({project}) => (
  function ProjectContainer({project}){
   console.log(project)
    return(
  <div className='project'>
    <h3>{project.name}</h3>

    <p className='project__description'>{props.project.description}</p> 
    {props.project.stack && (
      <ul className='project__stack'>
        {props.project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {props.project.sourceCode && (
      <a
        href={props.project.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {props.project.livePreview && (
      <a
        href={props.project.livePreview}
        aria-label='live preview'
        className='link link--icon'
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