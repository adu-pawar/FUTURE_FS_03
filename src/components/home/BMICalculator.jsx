import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    if (height && weight) {
      const h = height / 100;
      const result = (weight / (h * h)).toFixed(1);
      setBmi(result);

      if (result < 18.5) {
        setMessage('Underweight');
        setSuggestion('Focus on high-calorie, nutrient-dense foods and strength training to build muscle mass.');
      } else if (result >= 18.5 && result < 24.9) {
        setMessage('Healthy Weight');
        setSuggestion('Great job! Maintain your current lifestyle with a balanced diet and regular exercise.');
      } else if (result >= 25 && result < 29.9) {
        setMessage('Overweight');
        setSuggestion('Incorporate more cardio and monitor your calorie intake for a sustainable weight loss journey.');
      } else {
        setMessage('Obese');
        setSuggestion('Consult a professional for a personalized fitness and nutrition plan. Start with low-impact exercises.');
      }
    }
  };

  return (
    <section className="py-24 bg-dark-soft relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-subtitle text-left">Your Health Meter</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Calculate Your <span className="text-primary">BMI</span></h2>
            <p className="text-gray-400 mb-8 max-w-lg">
              Body Mass Index (BMI) is a measure of body fat based on height and weight that applies to adult men and women. Use this tool to get a quick snapshot of your health status.
            </p>
            
            <form onSubmit={calculateBMI} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Height (cm)</label>
                  <input 
                    type="number" 
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="e.g. 175"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Weight (kg)</label>
                  <input 
                    type="number" 
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="e.g. 70"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>
              </div>
              <button 
                type="submit"
                className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-xl font-bold transition-all"
              >
                Calculate Now
              </button>
            </form>

            {bmi && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 p-6 glass-card border-primary/20 bg-primary/5"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-gray-400 text-sm uppercase tracking-widest">Your BMI</span>
                    <div className="text-4xl font-black text-white">{bmi}</div>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-400 text-sm uppercase tracking-widest">Status</span>
                    <div className="text-2xl font-bold text-primary">{message}</div>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-white text-sm font-medium mb-1">Our Suggestion:</p>
                  <p className="text-gray-400 text-sm">{suggestion}</p>
                </div>
              </motion.div>
            )}
          </div>

          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" 
              alt="Fitness Progress"
              className="relative rounded-2xl shadow-2xl z-10 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;
