import React from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions";
import UserHeader from "./UserHeader";

class PostList extends React.Component {
  componentDidMount() {
    // this.props.fetchPosts();
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    return this.props.posts.map((post) => {
      return (
        <div className="item mt-4" key={post.id}>
          <i className=""></i>
          <div className="content">
            <div className="description">
              <h1 className="text-xl text-black-800">{post.title}</h1>
              <p className="text-base">{post.body}</p>
            </div>
            <div className="text-sm text-blue-400">
              <UserHeader userId={post.userId} />
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="md:container md:mx-auto">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
