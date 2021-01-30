import React from 'react'
import Portfoliocard from '../../components/card/portfolio-card'
import projects from '../../projects.json'
import TrackFinder from '../../Assets/Images/Track-finder-screenshot.png'
import CodeQuiz from '../../Assets/Images/JS-code-quiz-screenshot1.png'
import WorkDayScheduler from '../../Assets/Images/my-work-day-scheduler-screenshot1.png'
import STCC from '../../Assets/Images/senior-travel-covid-care-app-screenshot1.png'
import WeatherDashboard from '../../Assets/Images/Weather-dashboard-screenshot.png'
import BurgerApp from '../../Assets/Images/burger-app-screenshot1.png'

const portfolio = () => {
  return (
    <div>
      <br />
      <div className='row'>
        <div className='col s3'>
          <Portfoliocard
            key={projects[0].id}
            title={projects[0].title}
            image={TrackFinder}
            description={projects[0].description}
            link={projects[0].link}
          />
        </div>
        <div className='col s3'>
          <Portfoliocard
            key={projects[1].id}
            title={projects[1].title}
            image={WorkDayScheduler}
            description={projects[1].description}
            link={projects[1].link}
          />
        </div>
        <div className='col s3'>
          <Portfoliocard
            key={projects[2].id}
            title={projects[2].title}
            image={STCC}
            description={projects[2].description}
            link={projects[2].link}
          />
        </div>
      </div>
      <div className='row'>
        <div className='col s3'>
          <Portfoliocard
            key={projects[3].id}
            title={projects[3].title}
            image={CodeQuiz}
            description={projects[3].description}
            link={projects[3].link}
          />
        </div>
        <div className='col s3'>
          <Portfoliocard
            key={projects[4].id}
            title={projects[4].title}
            image={WeatherDashboard}
            description={projects[4].description}
            link={projects[4].link}
          />
        </div>
        <div className='col s3'>
          <Portfoliocard
            key={projects[5].id}
            title={projects[5].title}
            image={BurgerApp}
            description={projects[5].description}
            link={projects[5].link}
          />
        </div>
      </div>
    </div>
  )
}

export default portfolio
