import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import styles from 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@material-ui/icons/School'
import WorkIcon from '@material-ui/icons/Work'

export function links() {
  return [{
    rel:'stylesheet',
    href: styles
  }]
}

const Experience = () => {
  return (
    <div className="experience">
    <VerticalTimeline lineColor="#3e497a">
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2008 - 2012"
        iconStyle={{ background: '#3e497a', color: '#fff' }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
         Colegio Nuevo Campestre, Bogotá, Colombia
        </h3>
        <p> High School Diploma</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2012 - 2017"
        iconStyle={{ background: '#3e497a', color: '#fff' }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          University of the Sabana, Chía, Colombia
        </h3>

        <h4 className="vertical-timeline-element-subtitle">
          Bachelor's Degree
        </h4>

        <p> Audiovisual and Multimedia Communicator </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2019 - 2020"
        iconStyle={{ background: '#3e497a', color: '#fff' }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Data Science IBM
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Coursera
        </h4>
        <p>Full data Science specialization Python, Jupiter, Matplotlib, Stadistics .</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2020 - 2021"
        iconStyle={{ background: '#3e497a', color: '#fff' }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Web Apps with MERN stack, Mision TIC 2021 - UPB
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
            Virtual - 800 hours
        </h4>
        <p>
        A full year of knowledge the most used programming language like Python and Java, also in the MERN stack, with the use of the following technologies:
          React, NodeJS, Express, MongoDB, Mongoose, Material-UI, Bootstrap
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2021 - 2022"
        iconStyle={{ background: '#e9d35b', color: '#fff' }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          React, Redux, Firebase, FrontEnd - Academia Geek
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
         Remote, Colombia
        </h4>
        <p>
        Learn by doing and project-based are the best words to describe what I could experience there. Challenges based on real-life work prepare us to create strong software.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2022"
        iconStyle={{ background: '#e9d35b', color: '#fff' }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Freenlace Web App - React and Style Components
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Remote
        </h4>
        <p>
          Helped a team to create components that display data for api, in which i had to use algorithms to create a dynamic web app sorting and cleaning the data.
          React, Redux, Firebase, Material-UI, Bootstrap,

        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  </div>
)
}

export default Experience
