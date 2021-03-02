import React from 'react'

const Contactcard = () => {
  //form action on submit
  function submitForm (ev) {
    alert(
      'Your message has been sent.  Please allow 24-48 business hours for a response.'
    )
  }

  return (
    <div>
      <div id='contact-form'>
        <div className='collection'>
          <h1>Contact</h1>
        </div>
        <br />
        <div className='row'>
          <form
            className='col s12'
            action='https://formspree.io/f/xaylkwgy'
            method='POST'
          >
            <h6>Full Name</h6>
            <div className='input-field'>
              <i className='material-icons prefix'>account_circle</i>
              <input
                id='fullname'
                type='text'
                className='validate'
                name='full-name'
                required
              />
              <h6>Email</h6>
              <div className='input-field'>
                <i className='material-icons prefix'>email</i>
                <input
                  id='icon_email'
                  type='email'
                  className='validate'
                  name='email'
                  required
                />
                <h6>Message</h6>
                <div className='input-field'>
                  <i className='material-icons prefix'>mode_edit</i>
                  <textarea
                    id='icon_prefix2'
                    className='materialize-textarea'
                    type='text'
                    name='message'
                    required
                  ></textarea>
                  <br />
                  <br />
                  <div className='submit-button'>
                    <button
                      className='btn waves-effect waves-light'
                      type='submit'
                      name='action'
                      value='Send'
                      onClick={submitForm}
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
