import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faRocket } from '@fortawesome/free-solid-svg-icons'

const portfoliocard = props => {
  return (
    <div>
      <br />
      <br />
      <div className='row'>
        <div className='col s12 m12'>
          <div className='card'>
            <div className='card-image'>
              <img src={props.image} alt='app screenshot' />
              <span className='card-title'>{props.title}</span>
            </div>
            <div className='card-content'>
              <p>{props.description}</p>
            </div>
            <div className='card-action'>
              <a href={props.link}>
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href={props.deploy}>
                <FontAwesomeIcon icon={faRocket} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default portfoliocard
