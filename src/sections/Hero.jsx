import { useState, useEffect, memo } from "react";
import { Button } from "@/components/Button";
import {
  ArrowRight,
  Download,
  ChevronDown,
  Github,
  Linkedin,
  BarChart2,
} from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const skills = [
  "Python", "Scikit-learn", "XGBoost", "Git", "Github Actions",
  "Docker", "Kubernetes", "Kubeflow", "Azure", "AWS",
  "Fast API", "Flask", "SQL", "React", "Tailwind CSS", "Node.js",
];

// 1. new way tried by moving dots to a separate component so they don't re-render with the text
const BackgroundDots = memo(() => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full opacity-60"
          style={{
            backgroundColor: "#20B2A6",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
});

export const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const specialties = ["Computer Vision", "Gen AI", "LLM", "MLOps"];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % specialties.length;
      const fullText = specialties[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="hero-background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* 2. uuse the smooth BackgroundDots component here */}
      <BackgroundDots />

      {/* Main content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                AI/ML Engineer •
                <span className="ml-1 font-medium border-r-2 border-primary pr-1 min-h-[1.25rem]">
                  {text}
                </span>
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in animation-delay-100">
                Bridging <span className="text-primary glow-text">Innovation</span>
                <span className="font-serif italic font-normal text-white/90"> and </span>
                <span className="text-primary glow-text">Production</span>:
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                  <br />Architecting Production-Grade AI
                </span>
              </h1>
                <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                    Hi, I'm Mandeep Motan. <br />
                    A developing AI/ML Engineer dedicated to mastering the full ML lifecycle. 
                    I'm currently building projects that explore the intersection of model development, 
                    Computer Vision, and production-ready infrastructure.
                </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href="#contact">
                <Button size="lg">
                  Contact Me <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                <span className="text-sm text-muted-foreground">Follow me:</span>
                {[
                    { icon: Github, href: "https://github.com/mandeepmotan-ai/", label: "Github" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/mandeepmotan-ai", label: "Linkedin"},
                    { icon: BarChart2, href: "https://www.kaggle.com/mandeepmotan", label: "Kaggle"},

                    { 
                        isEmoji: true, 
                        icon: "🤗", 
                        href: "https://huggingface.co/mandeepmotan", 
                        label: "Hugging Face" 
                    },
                ].map((social, idx) => (
                <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                    className="p-2 w-10 h-10 flex items-center justify-center rounded-full glass hover:bg-primary/10 hover:text-primary transition-all              duration-300"
                >
                    {social.isEmoji ? (
                    <span className="text-lg leading-none">{social.icon}</span>
                ) : (<social.icon className="w-5 h-5" />)}
                </a>
                ))}
            </div>
          </div>

          {/* Right column - profile image */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-plus" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-photo.jpg"
                  alt="Mandeep Motan"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">++</div>
                  <div className="text-sm font-medium">Gaining Exp.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* skillset marquee */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">Technologies I work with</p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};