import React from 'react'

const Contactcard = () => {
  return (
    <div>
      <br />
      <div id='contact-form'>
        <div className='collection'>
          <h1>Contact</h1>
        </div>
        <br />
        <div className='row'>
          <form className='col s11'>
            <h6>Full Name</h6>
            <div className='input-field col s11'>
              <i className='material-icons prefix'>account_circle</i>
              <input id='icon_prefix' type='text' className='validate' />
              <h6>Email</h6>
              <div className='input-field col s11'>
                <i className='material-icons prefix'>email</i>
                <input id='icon_email' type='email' className='validate' />
                <h6>Message</h6>
                <div className='input-field col s12'>
                  <i className='material-icons prefix'>mode_edit</i>
                  <textarea
                    id='icon_prefix2'
                    className='materialize-textarea'
                  ></textarea>
                  <br />
                  <br />
                  <div className='submit-button'>
                    <button
                      className='btn waves-effect waves-light'
                      type='submit'
                      name='action'
                      id='submit-button'
                    >
                      Submit
                      <i className='material-icons right'>send</i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contactcard
