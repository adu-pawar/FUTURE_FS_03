import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const trainers = [
  {
    id: 1,
    name: 'Alex Johnson',
    specialty: 'CrossFit Expert',
    experience: '8+ Years',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fe?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Jessica Lee',
    specialty: 'Yoga & Pilates',
    experience: '6+ Years',
    image: 'https://images.unsplash.com/photo-1518611012118-29615539f7ad?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'David Smith',
    specialty: 'Bodybuilding',
    experience: '10+ Years',
    image: 'https://images.unsplash.com/photo-149175235542e-00ca631776ce?q=80&w=1974&auto=format&fit=crop',
  }
];

const TrainerSection = () => {
  return (
    <section className="py-24 bg-dark-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-subtitle">Expert Coaches</span>
          <h2 className="section-title">Meet Our <span className="text-primary">Trainers</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card group overflow-hidden"
            >
              <div className="relative h-96 overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                
                {/* Social Icons */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href="#" className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
              
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-1">{trainer.name}</h3>
                <p className="text-primary font-semibold mb-2">{trainer.specialty}</p>
                <p className="text-gray-400 text-sm">Experience: {trainer.experience}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainerSection;
