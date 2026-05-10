import React, { useState } from 'react';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Programs from '../components/home/Programs';
import BMICalculator from '../components/home/BMICalculator';
import Testimonials from '../components/home/Testimonials';
import MembershipPlans from '../components/home/MembershipPlans';
import Contact from '../components/home/Contact';
import TrainerSection from '../components/home/TrainerSection';
import TransformationGallery from '../components/home/TransformationGallery';
import Schedule from '../components/home/Schedule';
import CalorieCalculator from '../components/home/CalorieCalculator';
import BlogSection from '../components/home/BlogSection';
import AuthModal from '../components/auth/AuthModal';

const Home = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div className="pt-16">
      <Hero onJoinClick={() => setIsAuthOpen(true)} />
      <About />
      <Programs />
      <TrainerSection />
      <MembershipPlans onJoinClick={() => setIsAuthOpen(true)} />
      <TransformationGallery />
      <Schedule />
      <CalorieCalculator />
      <BMICalculator />
      <Testimonials />
      <BlogSection />
      <Contact />
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </div>
  );
};

export default Home;
