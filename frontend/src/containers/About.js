import React from 'react';
import Header from '../components/Header'

class About extends React.Component {
  render() {
    return(
      <div className="full-height">
        <Header />
        <div className="container full-height" id="pageBody">
          <div className="row full-height">
            <div className="col-8" id="contents">
              <h1>About</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
