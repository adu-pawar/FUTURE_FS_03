import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-subtitle">Get in Touch</span>
          <h2 className="section-title">Contact <span className="text-primary">Titan</span></h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold mb-6">Have Questions? <br /><span className="text-primary">We're here to help!</span></h3>
            
            <div className="flex items-start space-x-6">
              <div className="w-14 h-14 glass flex items-center justify-center rounded-2xl shrink-0">
                <Phone size={24} className="text-primary" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1 text-lg">Call Us</h4>
                <p className="text-gray-400">+1 (555) 000-TITAN</p>
                <p className="text-gray-400">+1 (555) 000-POWER</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-14 h-14 glass flex items-center justify-center rounded-2xl shrink-0">
                <Mail size={24} className="text-primary" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1 text-lg">Email Us</h4>
                <p className="text-gray-400">contact@titanfitness.com</p>
                <p className="text-gray-400">support@titanfitness.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-14 h-14 glass flex items-center justify-center rounded-2xl shrink-0">
                <MapPin size={24} className="text-primary" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1 text-lg">Visit Us</h4>
                <p className="text-gray-400">123 Fitness Ave, Iron City, IC 56789</p>
                <p className="text-gray-400">Open: Mon-Sun (24/7)</p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-2xl overflow-hidden h-64 glass mt-8 grayscale hover:grayscale-0 transition-all duration-500">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2157071441!2d-73.9878436240248!3d40.757974771386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1715310000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Select Program</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-primary transition-colors appearance-none">
                  <option className="bg-dark-card">Weight Training</option>
                  <option className="bg-dark-card">CrossFit</option>
                  <option className="bg-dark-card">Yoga</option>
                  <option className="bg-dark-card">Personal Training</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Your Message</label>
                <textarea 
                  rows="4"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your fitness goals..."
                ></textarea>
              </div>

              <button className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all shadow-[0_0_20px_rgba(255,0,0,0.3)]">
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
