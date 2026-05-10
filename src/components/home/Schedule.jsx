import React, { useState } from 'react';
import { motion } from 'framer-motion';

const scheduleData = {
  Monday: [
    { time: '06:00 AM - 07:00 AM', class: 'CrossFit', trainer: 'Alex Johnson' },
    { time: '09:00 AM - 10:00 AM', class: 'Weight Training', trainer: 'Mike Ross' },
    { time: '05:00 PM - 06:00 PM', class: 'Yoga', trainer: 'Jessica Lee' },
  ],
  Tuesday: [
    { time: '07:00 AM - 08:00 AM', class: 'Cardio Blast', trainer: 'Sarah Chen' },
    { time: '10:00 AM - 11:00 AM', class: 'Zumba', trainer: 'Jessica Alba' },
    { time: '06:00 PM - 07:00 PM', class: 'Body Combat', trainer: 'Bruce Lee' },
  ],
  Wednesday: [
    { time: '06:00 AM - 07:00 AM', class: 'CrossFit', trainer: 'Alex Johnson' },
    { time: '09:00 AM - 10:00 AM', class: 'Weight Training', trainer: 'Mike Ross' },
    { time: '05:00 PM - 06:00 PM', class: 'Yoga', trainer: 'Jessica Lee' },
  ],
  Thursday: [
    { time: '07:00 AM - 08:00 AM', class: 'Cardio Blast', trainer: 'Sarah Chen' },
    { time: '10:00 AM - 11:00 AM', class: 'Zumba', trainer: 'Jessica Alba' },
    { time: '06:00 PM - 07:00 PM', class: 'Body Combat', trainer: 'Bruce Lee' },
  ],
  Friday: [
    { time: '06:00 AM - 07:00 AM', class: 'CrossFit', trainer: 'Alex Johnson' },
    { time: '09:00 AM - 10:00 AM', class: 'Weight Training', trainer: 'Mike Ross' },
    { time: '05:00 PM - 06:00 PM', class: 'Yoga', trainer: 'Jessica Lee' },
  ],
  Saturday: [
    { time: '08:00 AM - 09:00 AM', class: 'Zumba', trainer: 'Jessica Alba' },
    { time: '11:00 AM - 12:00 PM', class: 'Body Combat', trainer: 'Bruce Lee' },
  ],
  Sunday: [
    { time: '09:00 AM - 10:00 AM', class: 'Yoga', trainer: 'Jessica Lee' },
  ],
};

const Schedule = () => {
  const [activeDay, setActiveDay] = useState('Monday');

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-subtitle">Weekly Plan</span>
          <h2 className="section-title">Workout <span className="text-primary">Schedule</span></h2>
        </div>

        {/* Day Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(scheduleData).map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-6 py-2 rounded-full font-bold transition-all ${
                activeDay === day 
                ? 'bg-primary text-white shadow-[0_0_15px_rgba(255,0,0,0.3)]' 
                : 'glass text-gray-400 hover:text-white'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Schedule Table */}
        <div className="overflow-x-auto">
          <div className="min-w-[600px] space-y-4">
            {scheduleData[activeDay].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="glass-card p-6 grid grid-cols-3 items-center"
              >
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-widest mb-1">Time</p>
                  <p className="text-white font-bold">{item.time}</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-400 text-sm uppercase tracking-widest mb-1">Class</p>
                  <p className="text-primary font-black italic text-xl">{item.class}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400 text-sm uppercase tracking-widest mb-1">Trainer</p>
                  <p className="text-white font-bold">{item.trainer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
