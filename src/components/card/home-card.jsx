import React from 'react'
import MyPic from '../../Assets/Images/IMG_1428_GC_2018.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './cards.css'
import {
  faGithub,
  faGoogleDrive,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'

const homecard = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col s12 m7'>
          <div className='z-depth-5'>
            <h2>About Me</h2>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <div className='card'>
            <div className='card-image'>
              <img
                id='home-image'
                className='z-depth-3'
                src={MyPic}
                alt='sykes headshot w/son'
              />
              <div className='card-content'>
                <p className='flow-text'>
                  Mid-career digital minded professional with proven ability to
                  match business goals with engineering and timed software value
                  delivery. Proficient at providing a bridge between finance,
                  operations, product management, and software engineering. Lead
                  and directed over 13 new product introduction programs that
                  resulted in a combined customer value of $16.5MM, internal
                  productivity savings of $7MM, and business growth value of
                  $3.2MM. I've recently expanded my toolbox of software
                  development skills via enrollment in the Georgia Tech
                  Full-Stack Coding Boot Camp (MERN development stack).
                </p>
                <p className='flow-text'>
                  I have 2 grown children, Matthew & Nathan with my lovely wife
                  Silvia, and we currently live in Marietta, GA. We've been
                  living in Georgia for over 23 years and have grown very
                  accustomed to the "southern lifestyle with a somewhat
                  metropolitan feel" in Atlanta. We actually reside in East Cobb
                  (county), which is technically not an official municipality
                  but feels like a welcoming community just the same. With all
                  the green space, southern hospitality, access to extensive
                  outdoor activities year round, lower cost of living, northern
                  GA feels like paradise to us.
                </p>
              </div>
              <div className='card-action'>
                <a
                  href='https://www.linkedin.com/in/justin-sykes-csm-cspo-36819658/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href='https://github.com/204039643'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href='https://docs.google.com/document/d/1LMDlnRUDP7ibYb5_xwiYeFiaMEp1bDvi2qf2h4Dr8iY/edit?usp=sharing'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FontAwesomeIcon icon={faGoogleDrive} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default homecard
