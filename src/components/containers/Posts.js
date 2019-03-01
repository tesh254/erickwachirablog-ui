import React from "react";
import { Link } from "react-router-dom";
import { getAllArticles } from "../../axios";

class Posts extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    getAllArticles().then(response => {
      this.setState({
        articles: response.data.blogs
      });
    });
  }

  render() {
    let calc = 0;
    return (
      <div className="posts">
        <p className="top-posts-title">💯 Articles</p>
        <div className="container">
          <div className="row">
            {this.state.articles.map(article => (
              <div className="col-lg-4 col-md-12" id="card">
                <Link
                  to={{ pathname: `/articles/${article.slug}` }}
                  className="link"
                >
                  <div className="content" key={calc++}>
                    <div className="post-title">
                      <h1 className="header">{article.title}</h1>
                      <p className="description">{article.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;
