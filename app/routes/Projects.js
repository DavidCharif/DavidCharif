import React from 'react'
import ProjectItem from '../components/ProjectItem'
import { ProjectList } from '../helpers/ProjectList'

import styles from '../styles/Projects.css'

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}

function Projects() {
  return (
    <div className="projects">
      <h1> My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem key={idx} id={idx} name={project.name} image={project.image} />
          )
        })}
      </div>
    </div>
  )
}

export default Projects
