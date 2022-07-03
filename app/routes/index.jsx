import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import GithubIcon from '@material-ui/icons/GitHub'
import styles from '../styles/Home.css'

export function links() {
  return [{
    rel:'stylesheet',
    href: styles
  }]
}

export default function Index() {
  return (
    <div className="home">
    <div className="about">
      <h2> Hi, My Name is David</h2>
      <div className="prompt">
        <p>A software developer with a passion for learning and creating.</p>
        <a href="https://www.linkedin.com/in/davidCharif"><LinkedInIcon /></a>
        <a href="https://www.github.com/davidCharif"><GithubIcon /></a>
        <EmailIcon

          />
      </div>
    </div>
    <div className="skills">
      <h1> Skills</h1>
      <ol className="list">
        <li className="item">
          <h2> Front-End</h2>
          <span>
            ReactJS, Redux, HTML, CSS, NPM,
            Figma, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
          </span>
        </li>
        <li className="item">
          <h2>Back-End</h2>
          <span>
            NodeJS, ExpressJS, GraphQL, ApolloServer,
            MySQL, MongoDB, AWS S3
          </span>
        </li>
        <li className="item">
          <h2>Languages</h2>
          <span>JavaScript, Python, TypeScript, </span>
        </li>
      </ol>
    </div>
  </div>
  )
}
