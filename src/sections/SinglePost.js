import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
      const res = await fetch(`https://public-api.wordpress.com/rest/v1.1/sites/grcdeby.wordpress.com/posts/${id}`);
      const data = await res.json();
      setPost(data);
      } catch (err) {
      console.error('Error loading post:', err);
      }
    };
    fetchPost();
  }, [id]);

  if (!post) return <p className="p-8">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-green-800 mb-4">{post.title}</h1>
      <p className="text-green-600 mb-6">{new Date(post.date).toLocaleDateString()}</p>
      <div
        className="prose prose-green max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
};

export default SinglePost;
