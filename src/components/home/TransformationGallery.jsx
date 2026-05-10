import React from 'react';
import { motion } from 'framer-motion';

const transformations = [
  { id: 1, before: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop', after: 'https://images.unsplash.com/photo-1583454110551-21f2fa29617c?q=80&w=2070&auto=format&fit=crop', name: 'John Doe' },
  { id: 2, before: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop', after: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop', name: 'Jane Smith' },
];

const TransformationGallery = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-subtitle">Real Results</span>
          <h2 className="section-title">Member <span className="text-primary">Transformations</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {transformations.map((item) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-[400px] rounded-2xl overflow-hidden">
                  <img src={item.before} alt="Before" className="w-full h-full object-cover grayscale" />
                  <div className="absolute top-4 left-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full uppercase tracking-widest font-bold">Before</div>
                </div>
                <div className="relative h-[400px] rounded-2xl overflow-hidden border-2 border-primary/50 shadow-[0_0_30px_rgba(255,0,0,0.2)]">
                  <img src={item.after} alt="After" className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs px-3 py-1 rounded-full uppercase tracking-widest font-bold">After</div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold text-white italic tracking-wider">{item.name}'s Journey</h3>
                <p className="text-primary font-bold text-sm">3 Months Transformation</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationGallery;
