import React from 'react';

export type postT = {
    id: number,
    title: string,
    content: string
}

const PostItem = (post: postT) => {
  return (
    <div key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default PostItem;