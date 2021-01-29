import React from 'react'
import Portfoliocard from '../../components/card/portfolio-card'
import projects from '../../projects.json'

const portfolio = () => {
  return (
    <div>
      <br />
      <div className='row'>
        <div className='col s3'>
          <Portfoliocard
            key={projects[0].id}
            title={projects[0].title}
            image={projects[0].image}
            description={projects[0].description}
            link={projects[0].link}
          />
        </div>
        <div className='col s3'>
          <Portfoliocard
            key={projects[1].id}
            title={projects[1].title}
            image={projects[1].image}
            description={projects[1].description}
            link={projects[1].link}
          />
        </div>
        <div className='col s3'>
          <Portfoliocard
            key={projects[2].id}
            title={projects[2].title}
            image={projects[2].image}
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
            image={projects[3].image}
            description={projects[3].description}
            link={projects[3].link}
          />
        </div>
        <div className='col s3'>
          <Portfoliocard
            key={projects[4].id}
            title={projects[4].title}
            image={projects[4].image}
            description={projects[4].description}
            link={projects[4].link}
          />
        </div>
        <div className='col s3'>
          <Portfoliocard
            key={projects[5].id}
            title={projects[5].title}
            image={projects[5].image}
            description={projects[5].description}
            link={projects[5].link}
          />
        </div>
      </div>
    </div>
  )
}

export default portfolio
