import React from 'react';
import Header from '../components/Header'

class Home extends React.Component {
  render() {

    return (
      <div className="full-height">
        <Header />
        <div className="container full-height" id="pageBody">
          <div className="row full-height">
            <div className="col-4 my-auto">
            </div>
            <div className="col-8" id="contents">
              <h1>Home</h1>
              <p>Welcome home!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
