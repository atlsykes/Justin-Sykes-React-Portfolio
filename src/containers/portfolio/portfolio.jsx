import React from 'react'
import Portfoliocard from '../../components/card/portfolio-card'
import projects from '../../projects.json'
import TrackFinder from '../../Assets/Images/Track-finder-screenshot.png'
import CodeQuiz from '../../Assets/Images/JS-code-quiz-screenshot1.png'
import WorkDayScheduler from '../../Assets/Images/my-work-day-scheduler-screenshot1.png'
import STCC from '../../Assets/Images/senior-travel-covid-care-app-screenshot1.png'
import WeatherDashboard from '../../Assets/Images/Weather-dashboard-screenshot.png'
import Insulterator from '../../Assets/Images/Insulterator9000-screenshot.png'
import WorkoutTracker from '../../Assets/Images/Mongo-fitness-tracker-app-screenshot1.png'
import './portfolio.css'

const portfolio = () => {
  return (
    <div>
      <div className='container' id='port-container'>
        <div className='row'>
          <div className='col s4'>
            <Portfoliocard
              key={projects[0].id}
              title={projects[0].title}
              image={STCC}
              description={projects[0].description}
              link={projects[0].link}
              deploy={projects[0].deploy}
            />
          </div>
          <div className='col s4'>
            <Portfoliocard
              key={projects[1].id}
              title={projects[1].title}
              image={TrackFinder}
              description={projects[1].description}
              link={projects[1].link}
              deploy={projects[1].deploy}
            />
          </div>
          <div className='col s4'>
            <Portfoliocard
              key={projects[2].id}
              title={projects[2].title}
              image={Insulterator}
              description={projects[2].description}
              link={projects[2].link}
              deploy={projects[2].deploy}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col s4'>
            <Portfoliocard
              key={projects[3].id}
              title={projects[3].title}
              image={WorkDayScheduler}
              description={projects[3].description}
              link={projects[3].link}
              deploy={projects[3].deploy}
            />
          </div>
          <div className='col s4'>
            <Portfoliocard
              key={projects[4].id}
              title={projects[4].title}
              image={CodeQuiz}
              description={projects[4].description}
              link={projects[4].link}
              deploy={projects[4].deploy}
            />
          </div>
          <div className='col s4'>
            <Portfoliocard
              key={projects[5].id}
              title={projects[5].title}
              image={WeatherDashboard}
              description={projects[5].description}
              link={projects[5].link}
              deploy={projects[5].deploy}
            />
          </div>
          <div className='row'>
            <div className='col s4'>
              <Portfoliocard
                key={projects[6].id}
                title={projects[6].title}
                image={WorkoutTracker}
                description={projects[6].description}
                link={projects[6].link}
                deploy={projects[6].deploy}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default portfolio
