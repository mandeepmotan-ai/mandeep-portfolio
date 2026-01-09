import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from 'react';

const testimonials = [
  {
    quote:
      "Mandeep built a landing page for my restaurant that really captured our vibe. He was professional, quick to make changes, and made the whole process easy for someone who isn't from tech background.",
    author: "Priyanshu Badyal",
    role: "Local Business Owner",
    avatar: "/avatars/priyanshu_badyal.jpg", 
  },
  {
    quote:
      "Working with Mandeep on our AI project was great. He handled the heavy lifting on the model deployment and was always the one figuring out why the code wasn't running in the shared environment.",
    author: "Mandeep Mangotra",
    role: "College AI Group",
    avatar: "/avatars/mandeep_mangotra.jpg", 
  },
];


export const Testimonials = () => {

    const [activeIdx, setActiveIdx] = useState(0);

    const next = () => {
        setActiveIdx((prev) => (prev + 1) % testimonials.length)
    }

    const previous = () => {
        // setActiveIdx((prev) => (prev + -1 + testimonials.length) % testimonials.length)
        setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="testimonials" className="py-32 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 w-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"/>
            <div className="container mx-auto px-6 relative z-10 ">

                {/* section header  */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="text-primary text-sm font-medium tracking-widest uppercase">
                        Testimonials
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-4 text-white">
                        Kind words from <br />
                        <span className="font-serif italic text-primary/80">collaborators.</span>
                    </h2>
                </div>

                {/* Testimonial Carousel */}
                <div className="max-w-4xl mx-auto ">
                    <div className="relative">
                        {/* Main Testimonial  */}
                        <div key={activeIdx} className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
                            <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                                <Quote className="w-6 h-6 text-primary-foreground "/>
                            </div>
                            <blockquote  className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4 min-h-[120px]">"{testimonials[activeIdx].quote}"</blockquote>
                            <div className="flex items-center gap-4">
                                <img 
                                    src={testimonials[activeIdx].avatar}
                                    alt={testimonials[activeIdx].author}
                                    className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20 "
                                />
                                <div >
                                    <div className="font-semibold">
                                        {testimonials[activeIdx].author}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        {testimonials[activeIdx].role}
                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                        {/* Testimonials Navigation  */}
                        <div className="flex items-center justify-center gap-4 mt-8 ">
                            <button onClick={previous} className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all">
                                <ChevronLeft/>
                            </button>

                            <div className="flex gap-2">
                                {testimonials.map((_, idx) => (
                                    <button 
                                        onClick={() => setActiveIdx(idx)} 
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIdx ? "w-8 bg-primary":"bg-muted-foreground/30 hover:muted-foreground/50 "}`} 

                                        />
                                ))}
                            </div>

                            <button onClick={next} className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all">
                                <ChevronRight/>
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );

};