import React from "react";

class Posts extends React.Component {
  render() {
    return (
      <div className="posts">
        <p className="top-posts-title">💯 Top</p>
        <div className="container">
          <div className="row">
            <div className="col-lg-4" id="card">
              <div className="content">
                <div className="post-title">
                  <h3>Simple dockerizing of nodejs apps</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4" id="card">
              <div className="content">
                <div className="post-title">
                  <h3>Simple dockerizing of nodejs apps</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4" id="card">
              <div className="content">
                <div className="post-title">
                  <h3>Simple dockerizing of nodejs apps</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;
