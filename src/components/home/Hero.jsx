import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';

const Hero = ({ onJoinClick }) => {
  const { currentUser } = useAuth();
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="Gym Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold tracking-[0.3em] uppercase mb-4 block">
              Push your limits
            </span>
            <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter mb-6 leading-none">
              TRANSFORM <br />
              <span className="text-outline-white">YOUR BODY.</span> <br />
              <span className="text-primary">YOUR LIFE.</span>
            </h1>
            <p className="text-gray-300 text-lg mb-10 max-w-lg leading-relaxed">
              Experience the pinnacle of fitness at Titan. Our world-class facility and expert coaches are here to help you unlock your true potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {!currentUser && (
                <button 
                  onClick={onJoinClick}
                  className="bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,0,0,0.4)]"
                >
                  Join Now
                </button>
              )}
              <a 
                href="#contact"
                className="glass hover:bg-white/10 text-white px-10 py-4 rounded-full font-bold text-lg transition-all text-center inline-block"
              >
                Book Free Trial
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 flex gap-12"
          >
            <div>
              <div className="text-3xl font-black italic">500+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Members</div>
            </div>
            <div>
              <div className="text-3xl font-black italic">30+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Trainers</div>
            </div>
            <div>
              <div className="text-3xl font-black italic">15+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Programs</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-0 bottom-0 w-1/3 h-full hidden lg:block opacity-20 pointer-events-none">
        <div className="w-full h-full border-l border-primary/30 skew-x-[-20deg] transform translate-x-1/2" />
      </div>
    </section>
  );
};

export default Hero;
