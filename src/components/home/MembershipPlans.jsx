import React from 'react';
import { Check, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Basic',
    price: '2999',
    features: [
      'Access to Gym Floor',
      'Free Locker Room',
      '1 Complimentary Assessment',
      'Standard Support'
    ],
    highlight: false
  },
  {
    name: 'Premium',
    price: '5999',
    features: [
      'Everything in Basic',
      'All Group Classes',
      'Personalized Workout Plan',
      'Priority Support',
      '24/7 Access'
    ],
    highlight: true
  },
  {
    name: 'Elite',
    price: '9999',
    features: [
      'Everything in Premium',
      'Personal Training (2/mo)',
      'Nutrition Coaching',
      'Guest Passes (3/mo)',
      'Spa & Sauna Access'
    ],
    highlight: false
  }
];

const MembershipPlans = ({ onJoinClick }) => {
  return (
    <section id="pricing" className="py-24 bg-dark-soft relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-subtitle">Membership</span>
          <h2 className="section-title">Choose Your <span className="text-primary">Plan</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl transition-all duration-300 ${
                plan.highlight 
                ? 'bg-primary scale-105 z-10 shadow-[0_0_40px_rgba(255,0,0,0.3)]' 
                : 'glass-card'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-primary font-bold text-xs uppercase tracking-widest px-4 py-1 rounded-full flex items-center">
                  <Zap size={14} className="mr-1 fill-current" /> Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">{plan.name}</h3>
                <div className="flex justify-center items-baseline">
                  <span className="text-2xl font-bold">₹</span>
                  <span className="text-6xl font-black">{plan.price}</span>
                  <span className="text-gray-400 font-medium ml-1">/mo</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-3 text-sm">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.highlight ? 'bg-white/20' : 'bg-primary/20'}`}>
                      <Check size={12} className={plan.highlight ? 'text-white' : 'text-primary'} />
                    </div>
                    <span className={plan.highlight ? 'text-white' : 'text-gray-300'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={onJoinClick}
                className={`w-full py-4 rounded-xl font-bold transition-all ${
                plan.highlight 
                ? 'bg-white text-primary hover:bg-gray-100' 
                : 'bg-primary text-white hover:bg-primary-dark shadow-[0_0_20px_rgba(255,0,0,0.2)]'
              }`}>
                Join Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipPlans;
