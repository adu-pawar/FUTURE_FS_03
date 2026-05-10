import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, HeartPulse, Zap, Flower2, Users, Flame } from 'lucide-react';

const programs = [
  {
    id: 1,
    title: 'Weight Training',
    description: 'Build strength and muscle with our state-of-the-art equipment.',
    icon: <Dumbbell className="text-primary" size={32} />,
    trainer: 'Mike Ross',
    duration: '60 min',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Cardio Blast',
    description: 'High-intensity cardiovascular workouts to burn fat and improve heart health.',
    icon: <HeartPulse className="text-primary" size={32} />,
    trainer: 'Sarah Chen',
    duration: '45 min',
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'CrossFit',
    description: 'Functional movements performed at high intensity for total body fitness.',
    icon: <Zap className="text-primary" size={32} />,
    trainer: 'John Wick',
    duration: '60 min',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Yoga & Zen',
    description: 'Find your balance and inner peace with our meditative yoga sessions.',
    icon: <Flower2 className="text-primary" size={32} />,
    trainer: 'Emma Watson',
    duration: '75 min',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Zumba Dance',
    description: 'Dance your way to fitness with energetic Latin-inspired moves.',
    icon: <Users className="text-primary" size={32} />,
    trainer: 'Jessica Alba',
    duration: '50 min',
    image: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Body Combat',
    description: 'Martial arts-inspired workout to unleash your inner warrior.',
    icon: <Flame className="text-primary" size={32} />,
    trainer: 'Bruce Lee',
    duration: '60 min',
    image: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=2064&auto=format&fit=crop'
  }
];

const Programs = () => {
  return (
    <section id="programs" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="section-subtitle">Our Specialization</span>
          <h2 className="section-title">Explore Our <span className="text-primary">Programs</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card overflow-hidden group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
                <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  {program.duration}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 glass flex items-center justify-center rounded-xl">
                    {program.icon}
                  </div>
                  <span className="text-gray-400 text-sm font-medium">By {program.trainer}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{program.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {program.description}
                </p>
                <button className="text-white font-bold text-sm flex items-center group-hover:text-primary transition-colors">
                  Learn More <span className="ml-2 transition-transform group-hover:translate-x-2">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
