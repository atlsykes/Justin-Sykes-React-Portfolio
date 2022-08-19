import React from "react";

const Contactcard = () => {
  return (
    <div>
      <div id="contact-form">
        <div className="collection">
          <h2 style={{ color: "black" }}>Contact Me</h2>
        </div>
        <br />
        <div className="row">
          <form
            className="col s12"
            action="https://formspree.io/f/xaylkwgy"
            method="POST"
            id="contact-me"
          >
            <span>
              <h5>Full Name*</h5>
            </span>
            <div className="input-field">
              <i className="material-icons prefix">account_circle</i>
              <input
                id="fullname"
                type="text"
                className="validate"
                name="full-name"
                required
              />
              <h5>Email*</h5>
              <div className="input-field">
                <i className="material-icons prefix">email</i>
                <input
                  id="icon_email"
                  type="email"
                  className="validate"
                  name="email"
                  required
                />
                <h5>Message (optional)</h5>
                <div className="input-field">
                  <i className="material-icons prefix">mode_edit</i>
                  <textarea
                    id="icon_prefix2"
                    className="materialize-textarea"
                    type="text"
                    name="message"
                    required
                    data-length="300"
                  ></textarea>
                  <br />
                  <br />
                  <div className="buttons-div">
                    <button
                      className="btn waves-effect waves-light btn-large"
                      type="submit"
                      name="action"
                      value="Send"
                    >
                      Submit
                      <i className="material-icons right">send</i>
                    </button>
                    <button
                      id="reset-button"
                      className="btn waves-effect waves-light btn-large red accent-4"
                      onClick={() => {
                        document.getElementById("contact-me").reset();
                      }}
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactcard;
