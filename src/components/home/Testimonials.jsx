import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Quote, Star } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    name: 'James Rodriguez',
    role: 'Entrepreneur',
    content: "Titan Fitness has completely changed my life. The trainers are top-notch and the atmosphere is incredibly motivating. I've lost 15kg in just 4 months!",
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop',
    rating: 5
  },
  {
    id: 2,
    name: 'Elena Gilbert',
    role: 'Yoga Instructor',
    content: "The Yoga & Zen program at Titan is phenomenal. The glassmorphism design of the studio and the peaceful environment help me connect with my inner self.",
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
    rating: 5
  },
  {
    id: 3,
    name: 'Marcus Rashford',
    role: 'Athlete',
    content: "As a professional athlete, I need the best facilities. Titan provides everything I need from high-tech equipment to specialized recovery zones.",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-subtitle">Success Stories</span>
          <h2 className="section-title">What Our <span className="text-primary">Members</span> Say</h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="pb-16"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="glass-card p-8 h-full flex flex-col relative">
                <Quote className="text-primary absolute top-6 right-8 opacity-20" size={48} />
                
                <div className="flex space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={i < testimonial.rating ? "fill-primary text-primary" : "text-gray-600"} 
                    />
                  ))}
                </div>

                <p className="text-gray-300 italic mb-8 flex-grow">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                  />
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <span className="text-gray-400 text-xs uppercase tracking-widest">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      <style>{`
        .swiper-pagination-bullet {
          background: #4B5563;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #FF0000;
          width: 24px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
