// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    projectTitle,
    duration,
    description,
    projectUrl,
  } = projectDetails

  return (
    <div className="project-container">
      <img className="project-image" alt="project" src={imageUrl} />
      <div className="project-title-and-duration-container">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar color="#1e293b" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a className="link-text" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}
export default ProjectTimelineCard
