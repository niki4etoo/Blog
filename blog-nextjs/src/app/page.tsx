import React, { useState } from 'react';
import Header from '../components/Header';
import PostList from '../components/PostList';

export default function Home() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
    // Add more posts as needed
  ]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Blog - Nikolai Nanev

      <div>
        <Header />
        <main>
          <PostList posts={posts} />
        </main>
      </div>
    </main>
  )
}
