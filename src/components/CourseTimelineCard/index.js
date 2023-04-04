import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseTimeLineDetails} = props
  const {courseTitle, duration, description, tagsList} = courseTimeLineDetails

  return (
    <div className="course-container">
      <div className="title-and-duration-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle color="#171f46" />
          <p className="duration-text">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="list-container">
        {tagsList.map(eachList => (
          <li className="list-items" key={eachList.id}>
            <p className="list">{eachList.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default CourseTimelineCard
