import React from 'react';
import Header from '../components/Header'

class Store extends React.Component {
  render() {
    return(
      <div className="full-height">
        <Header />
        <div className="container full-height" id="pageBody">
          <div className="row full-height">
            <div className="col-8" id="contents">
              <h1>Store</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Store;
