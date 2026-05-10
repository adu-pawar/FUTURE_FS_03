import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Trophy, Heart } from 'lucide-react';

const About = () => {
  const features = [
    { icon: <Shield size={24} />, title: 'Certified Trainers', desc: 'Expert guidance from world-class certified professionals.' },
    { icon: <Target size={24} />, title: 'Personal Goals', desc: 'Customized plans tailored to your specific fitness objectives.' },
    { icon: <Trophy size={24} />, title: 'Modern Equipment', desc: 'Access to the latest high-tech fitness technology.' },
    { icon: <Heart size={24} />, title: 'Premium Community', desc: 'Join a supportive and elite community of fitness lovers.' },
  ];

  return (
    <section id="about" className="py-24 bg-dark-soft relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 blur-[100px] rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop" 
              alt="Gym Interior"
              className="rounded-3xl shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl z-20 hidden md:block">
              <div className="text-3xl font-black italic text-primary">10+</div>
              <div className="text-white font-bold uppercase tracking-widest text-xs">Years Experience</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-subtitle text-left">About Titan</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience The <span className="text-primary">Difference</span></h2>
            <p className="text-gray-400 mb-10 text-lg leading-relaxed">
              At Titan Fitness Club, we believe that fitness is more than just a workout—it's a lifestyle. Our mission is to provide an empowering environment where you can push your limits and transform your life.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-white/5 transition-colors group">
                  <div className="w-12 h-12 glass flex items-center justify-center rounded-xl shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                    <span className="text-primary group-hover:text-white">{feature.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{feature.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
