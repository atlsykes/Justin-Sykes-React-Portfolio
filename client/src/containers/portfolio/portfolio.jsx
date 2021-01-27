import React from 'react'
import Portfoliocard from '../../components/card/portfolio-card'

const portfolio = () => {
  return (
    <div>
        <br/>
      <div class='row'>
        <div class='col s3'><Portfoliocard/></div>
        <div class='col s3'><Portfoliocard/></div>
        <div class='col s3'><Portfoliocard/></div>
      </div>
      <div class='row'>
        <div class='col s3'><Portfoliocard/></div>
        <div class='col s3'><Portfoliocard/></div>
        <div class='col s3'><Portfoliocard/></div>
      </div>
    </div>
  )
}

export default portfolio
