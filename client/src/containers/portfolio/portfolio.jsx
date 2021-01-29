import React from 'react'
import Portfoliocard from '../../components/card/portfolio-card'
import projects from '../../projects.json'

const portfolio = () => {
  return (
    <div>
      <br />
      <div class='row'>
        <div class='col s3'>
          <Portfoliocard
            key={projects[0].id}
            title={projects[0].title}
            image={projects[0].image}
            description={projects[0].description}
            link={projects[0].link}
          />
        </div>
        <div class='col s3'>
          <Portfoliocard
            key={projects[0].id}
            title={projects[0].title}
            image={projects[0].image}
            description={projects[0].description}
            link={projects[0].link}
          />
        </div>
        <div class='col s3'>
          <Portfoliocard
            key={projects[0].id}
            title={projects[0].title}
            image={projects[0].image}
            description={projects[0].description}
            link={projects[0].link}
          />
        </div>
      </div>
      <div class='row'>
        <div class='col s3'>
          <Portfoliocard
            key={projects[0].id}
            title={projects[0].title}
            image={projects[0].image}
            description={projects[0].description}
            link={projects[0].link}
          />
        </div>
        <div class='col s3'>
          <Portfoliocard
            key={projects[0].id}
            title={projects[0].title}
            image={projects[0].image}
            description={projects[0].description}
            link={projects[0].link}
          />
        </div>
        <div class='col s3'>
          <Portfoliocard
            key={projects[0].id}
            title={projects[0].title}
            image={projects[0].image}
            description={projects[0].description}
            link={projects[0].link}
          />
        </div>
      </div>
    </div>
  )
}

export default portfolio
