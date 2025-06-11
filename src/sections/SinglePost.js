import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://nesdan.local/wp-json/wp/v2/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data))
      .catch(err => console.error('Error loading post:', err));
  }, [id]);

  if (!post) return <p className="p-8">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-green-800 mb-4" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      <p className="text-green-600 mb-6">{new Date(post.date).toLocaleDateString()}</p>
      <div
        className="prose prose-green max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </div>
  );
};

export default SinglePost;
