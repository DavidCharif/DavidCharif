import React from 'react'
import { useParams } from '@remix-run/react'
import GitHubIcon from '@material-ui/icons/GitHub'

import styles from '~/styles/ProjectDisplay.css'

import LinkedIn from '@material-ui/icons/LinkedIn'
import { projectList } from '../../helpers/ProjectList'

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}

function ProjectDisplay() {
  const  {id } = useParams()

  const project = projectList[id]
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt="Project" />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <a href={project?.url}><GitHubIcon /></a>
      <a href={project?.deploy}> <LinkedIn /> </a>
    </div>
  )
}

export default ProjectDisplay

