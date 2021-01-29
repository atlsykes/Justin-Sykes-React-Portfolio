import React from 'react'

const Contactcard = () => {
  return (
    <div>
      <div classNameName='container' id='contact-form'>
        <div className='row'>
          <form className='col s8'>
            <div className='input-field col s6'>
              <i className='material-icons prefix'>account_circle</i>
              <input id='icon_prefix' type='text' className='validate' />
              <label for='icon_prefix'>Name</label>
              <div className='input-field col s6'>
                <i className='material-icons prefix'>email</i>
                <input id='icon_telephone' type='tel' className='validate' />
                <label for='icon_telephone'>Email</label>
                <div class='input-field col s6'>
                  <i class='material-icons prefix'>mode_edit</i>
                  <textarea
                    id='icon_prefix2'
                    class='materialize-textarea'
                  ></textarea>
                  <label for='icon_prefix2'>Message</label>
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
