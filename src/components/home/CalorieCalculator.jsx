import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CalorieCalculator = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [activity, setActivity] = useState(1.2);
  const [calories, setCalories] = useState(null);

  const calculateCalories = (e) => {
    e.preventDefault();
    if (age && height && weight) {
      let bmr;
      if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
      } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
      }
      setCalories((bmr * activity).toFixed(0));
    }
  };

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-subtitle">Nutrition Tracker</span>
          <h2 className="section-title">Calorie <span className="text-primary">Calculator</span></h2>
        </div>

        <div className="glass-card max-w-4xl mx-auto p-8 md:p-12">
          <form onSubmit={calculateCalories} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Gender</label>
                <div className="flex space-x-4">
                  <button 
                    type="button"
                    onClick={() => setGender('male')}
                    className={`flex-1 py-3 rounded-xl font-bold transition-all ${gender === 'male' ? 'bg-primary text-white' : 'glass text-gray-400'}`}
                  >
                    Male
                  </button>
                  <button 
                    type="button"
                    onClick={() => setGender('female')}
                    className={`flex-1 py-3 rounded-xl font-bold transition-all ${gender === 'female' ? 'bg-primary text-white' : 'glass text-gray-400'}`}
                  >
                    Female
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Age (years)</label>
                <input 
                  type="number" 
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-6 text-white focus:outline-none focus:border-primary"
                  required
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Height (cm)</label>
                  <input 
                    type="number" 
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-6 text-white focus:outline-none focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Weight (kg)</label>
                  <input 
                    type="number" 
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-6 text-white focus:outline-none focus:border-primary"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Activity Level</label>
                <select 
                  value={activity}
                  onChange={(e) => setActivity(parseFloat(e.target.value))}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-6 text-white focus:outline-none focus:border-primary appearance-none"
                >
                  <option value="1.2">Sedentary (little or no exercise)</option>
                  <option value="1.375">Lightly active (light exercise 1-3 days/week)</option>
                  <option value="1.55">Moderately active (moderate exercise 3-5 days/week)</option>
                  <option value="1.725">Very active (hard exercise 6-7 days/week)</option>
                  <option value="1.9">Extra active (very hard exercise & physical job)</option>
                </select>
              </div>
            </div>

            <div className="md:col-span-2">
              <button 
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(255,0,0,0.3)]"
              >
                Calculate Daily Calories
              </button>
            </div>
          </form>

          {calories && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-12 text-center"
            >
              <p className="text-gray-400 uppercase tracking-widest text-sm mb-2">Your Daily Calorie Requirement</p>
              <div className="text-6xl font-black text-primary mb-4">{calories}</div>
              <p className="text-gray-300 max-w-lg mx-auto">
                Maintain this calorie intake to stay at your current weight. Adjust by -500 for weight loss or +500 for muscle gain.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CalorieCalculator;
