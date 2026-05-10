import React from 'react';

const Admin = () => {
  return (
    <div className="pt-24 px-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-primary">Admin Control Panel</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="glass-card p-6 text-center">
          <div className="text-3xl font-bold text-white mb-2">1,240</div>
          <div className="text-gray-400">Total Members</div>
        </div>
        <div className="glass-card p-6 text-center">
          <div className="text-3xl font-bold text-white mb-2">45</div>
          <div className="text-gray-400">Active Trainers</div>
        </div>
        <div className="glass-card p-6 text-center">
          <div className="text-3xl font-bold text-white mb-2">$12,400</div>
          <div className="text-gray-400">Monthly Revenue</div>
        </div>
        <div className="glass-card p-6 text-center">
          <div className="text-3xl font-bold text-white mb-2">12</div>
          <div className="text-gray-400">New Inquiries</div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
