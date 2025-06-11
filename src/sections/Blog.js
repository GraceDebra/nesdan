import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://nesdan.local/wp-json/wp/v2/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error('Failed to fetch posts:', err));
  }, []);

  return (
    <section id="blog" className="bg-white py-20 px-6 md:px-16 text-green-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-green-800">Latest Blog Posts</h2>
        <div className="space-y-8">
          {posts.slice(0, 4).map(post => (
  <div
    key={post.id}
    className="border-l-4 border-green-500 pl-4 hover:bg-green-50 p-4 rounded-md transition"
  >
    <h3
      className="text-xl font-semibold text-green-700 mb-1"
      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
    />

    <p className="text-sm text-green-600 mb-2">
      {new Date(post.date).toLocaleDateString()}
    </p>

    <p className="text-base mb-2">
      {post.excerpt.rendered.replace(/<[^>]+>/g, '').slice(0, 150)}...
    </p>

    <Link
      to={`/blog/${post.id}`}
      className="text-green-700 font-semibold hover:underline"
    >
      Read full article →
    </Link>
  </div>
))}

        </div>
      </div>
    </section>
  );
};

export default Blog;
