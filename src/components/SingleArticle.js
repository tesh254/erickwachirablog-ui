import React from "react";
import { getOneArticle } from "../axios";

class SingleArticle extends React.Component {
  constructor() {
    super();
    this.state = {
      article: {},
      errors: {}
    };
  }

  componentDidMount() {
    getOneArticle(this.props.match.params.slug)
      .then(response => {
        this.setState({
          article: response.data.blogs
        });
      })
      .catch(err => {
        this.setState({
          errors: err.response.data
        });
      });
  }

  render() {
    const { article } = this.state;
    return (
      <div>
        <div className="single-article-header">
          <h1>{article.title}</h1>
          <p>{article.description}</p>
          <br />
          <div className="share-icons">
            <i class="fab fa-facebook" /> &nbsp;
            <i class="fab fa-slack" /> &nbsp;
            <i class="fab fa-twitter-square" /> &nbsp;
            <i class="fab fa-instagram" />
          </div>
        </div>
        <div className="single-article-body">
          <hr />
          <div className="body">
            <p>{article.body}</p>
          </div>
        </div>
        <hr />
        <div className="extra">
          <i class="fas fa-eye" /> {article.views} views
        </div>
      </div>
    );
  }
}

export default SingleArticle;
