import React from 'react';
import { motion } from 'framer-motion';

const posts = [
  {
    id: 1,
    title: 'Top 5 Exercises for Muscle Growth',
    category: 'Training',
    date: 'May 10, 2026',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'The Ultimate Pre-Workout Meal Guide',
    category: 'Nutrition',
    date: 'May 08, 2026',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Mental Benefits of Regular Yoga',
    category: 'Lifestyle',
    date: 'May 05, 2026',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop',
  }
];

const BlogSection = () => {
  return (
    <section className="py-24 bg-dark-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-subtitle">Insights</span>
          <h2 className="section-title">Fitness <span className="text-primary">Blog</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card group overflow-hidden cursor-pointer"
            >
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-500 text-xs mb-2">{post.date}</p>
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h3>
                <div className="mt-4 flex items-center text-primary text-sm font-bold group-hover:translate-x-2 transition-transform">
                  Read More <span className="ml-2">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
