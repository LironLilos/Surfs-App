import React, { Component } from 'react';
/* import { signInWithGoogle } from './firebase/utils'; */
class Signin extends Component {
  handleSubmit = async (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <section className="signin">
        <div className="wrap">
          <h2>LogIn</h2>

          <div className="formWrap">
            <form onSubmit={this.handleSubmit}>
              <div className="social-signin">
                <div className="row">
                  <button>Sign in with google</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}
export default Signin;
