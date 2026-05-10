import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { currentUser } = useAuth();

  return (
    <div className="pt-24 px-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Welcome back, {currentUser?.name}!</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6">
          <h2 className="text-xl font-semibold mb-4 text-primary">Membership Status</h2>
          <p className="text-gray-400">Current Plan: Elite</p>
          <p className="text-gray-400">Expires: 12/12/2026</p>
        </div>
        <div className="glass-card p-6">
          <h2 className="text-xl font-semibold mb-4 text-primary">Workout Schedule</h2>
          <p className="text-gray-400">Next Session: CrossFit (Today, 5 PM)</p>
        </div>
        <div className="glass-card p-6">
          <h2 className="text-xl font-semibold mb-4 text-primary">Trainer</h2>
          <p className="text-gray-400">Your Trainer: Alex Johnson</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
