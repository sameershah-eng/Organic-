import React from 'react';
import { Quote, Star } from 'lucide-react';
import { siteConfig } from '../data/site.js';

export const TestimonialMarquee: React.FC = () => {
  const testimonials = siteConfig.testimonials;
  // Duplicate for seamless infinite loop
  const list = [...testimonials, ...testimonials];

  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* Edge gradient masks for seamless fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#FAFAFB] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#FAFAFB] to-transparent z-10 pointer-events-none" />

      <div className="flex gap-6 w-max animate-[marquee_45s_linear_infinite] hover:[animation-play-state:paused]">
        {list.map((item, index) => (
          <div
            key={index}
            className="w-[340px] md:w-[420px] p-6 rounded-3xl bg-white border border-stone-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between shrink-0 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between text-stone-400 mb-3">
                <Quote className="w-5 h-5 text-amber-500" />
                <div className="flex text-amber-400">
                  {[...Array(item.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal italic">
                "{item.quote}"
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
              <div>
                <h4 className="font-bold text-neutral-900">{item.author}</h4>
                <p className="text-[11px] text-stone-500">{item.city}</p>
              </div>
              <span className="text-[10px] font-mono bg-stone-100 text-stone-600 px-2.5 py-1 rounded-full truncate max-w-[150px]">
                {item.product}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialMarquee;
