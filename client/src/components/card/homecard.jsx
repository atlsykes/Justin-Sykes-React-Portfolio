import React from 'react'

const homecard = () => {
  return (
    <div classNameName='container'>
      <div className='row'>
        <div className='col s12 m7'>
          <p class='z-depth-5'>
            <h2>About Me</h2>
          </p>
        </div>
      </div>
      <div className='row'>
        <div className='col s12 m7'>
          <div className='card'>
            <div className='card-image'>
              <img id="home-image" className="z-depth-3"
                src='https://via.placeholder.com/150'
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
                  $3.2MM. I'm currently expanding my toolbox of software
                  development skills via enrollment in the Georgia Tech Full
                  Stack Coding Boot Camp.
                </p>
              </div>
              <div className='card-action'>
                <span>
                    <a href="/">Linked IN</a><a href="/">Github</a><a href="/">Resume</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default homecard
