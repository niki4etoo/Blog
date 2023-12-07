import React from 'react';
import PostItem, { postT } from './PostItem';


const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map(post => (
        <PostItem id={post.id} title={post.title} content={post.content} />
      ))}
    </div>
  );
};

export default PostList;