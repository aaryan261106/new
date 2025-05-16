import React from 'react';
import { blogPosts } from '../data/blogs';
import { Calendar, User } from 'lucide-react';

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-16 bg-emerald-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Sustainable Fashion Insights</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our latest articles on sustainable fashion, ethical practices, and eco-friendly lifestyle tips.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-0 right-0 bg-emerald-600 text-white px-3 py-1 m-2 rounded-md text-xs font-medium">
                  {post.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors">
                  {post.title}
                </h3>
                
                <div className="flex items-center text-gray-500 text-sm mb-3 space-x-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{post.excerpt}</p>

                <a 
                  href="#" 
                  className="text-emerald-600 font-medium hover:text-emerald-700 transition-colors inline-flex items-center"
                >
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-transparent border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors duration-300 rounded-md font-medium">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;