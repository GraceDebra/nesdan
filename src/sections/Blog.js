import React from 'react'

const blogPosts = [
  {
    title: "The Power of Community Tree Planting",
    date: "May 10, 2025",
    excerpt:
      "Tree planting isn’t just good for the environment—it brings communities together, inspires youth, and builds resilience. Here’s how NESDAN is making it happen…",
  },
  {
    title: "Plastic Pollution: What You Can Do Today",
    date: "April 28, 2025",
    excerpt:
      "Kenya generates over 500,000 tons of plastic waste annually. This post gives you 5 easy ways to reduce your plastic footprint right now.",
  },
  {
    title: "Why Climate Education Matters",
    date: "April 5, 2025",
    excerpt:
      "From rural schools to urban workshops, climate education is key to long-term change. Discover how NESDAN is empowering future generations.",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="bg-white py-20 px-6 md:px-16 text-green-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-green-800">Latest Blog Posts</h2>
        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="border-l-4 border-green-500 pl-4 hover:bg-green-50 p-4 rounded-md transition"
            >
              <h3 className="text-xl font-semibold text-green-700 mb-1">{post.title}</h3>
              <p className="text-sm text-green-600 mb-2">{post.date}</p>
              <p className="text-base">{post.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
