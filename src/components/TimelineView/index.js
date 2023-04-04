// Write your code here
import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimeLineCard = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard projectDetails={item} key={item.id} />
    }
    return <CourseTimelineCard key={item.id} courseTimeLineDetails={item} />
  }

  return (
    <>
      <div className="time-line-view-container">
        <div className="responsive-container">
          <div className="header-container">
            <h1 className="heading">
              MY JOURNEY OF
              <br />
              <span className="ccbp-heading">CCBP 4.0</span>
            </h1>
          </div>
          <Chrono
            theme={{secondary: 'white'}}
            items={timelineItemsList}
            mode="VERTICAL_ALTERNATING"
          >
            {timelineItemsList.map(eachItem => renderTimeLineCard(eachItem))}
          </Chrono>
        </div>
      </div>
    </>
  )
}
export default TimelineView
