import {
  Mail,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mandeepmotan1320@gmail.com",
    href: "mailto:mandeepmotan1320@gmail.com",
    target: "_blank",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Jammu, India",
    href: "https://maps.google.com/?cid=1090773297479089549&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ",
    target: "_blank",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      await emailjs.send(serviceId, templateId, formData, publicKey);

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully!",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Blobs
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div> */}

      {/* Background Blobs -> this time with anmation classes */}
      <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>

      {/* Main Container: px-4 ensurres it doesn't touch the screen edges on mobile */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">
            Next Steps
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 text-white">
            Ready to contribute <br />
            <span className="font-serif italic text-primary/80 text-2xl md:text-4xl">
              and learn from the best.
            </span>
          </h2>
        </div>

        {/* The Grid: grid-cols-1 makes thingss stack on top of each other on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Left Side: Contact Form */}
          <div className="glass p-6 md:p-8 rounded-3xl border border-primary/20">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your name..."
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 rounded-xl border border-white/10 focus:border-primary outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 rounded-xl border border-white/10 focus:border-primary outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 rounded-xl border border-white/10 focus:border-primary outline-none transition-all resize-none"
                />
              </div>
              <Button className="w-full py-6 text-lg" type="submit" disabled={isLoading}>
                {isLoading ? "Sending..." : "Send Message"}
                {!isLoading && <Send className="ml-2 w-5 h-5" />}
              </Button>
            </form>
          </div>

          {/* Right Side: Contact Info & Availability */}
          <div className="flex flex-col gap-6">
            <div className="glass p-6 md:p-8 rounded-3xl border border-white/5">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/5 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">{item.label}</div>
                      <div className="text-sm md:text-base font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass p-6 md:p-8 rounded-3xl border border-primary/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium text-sm md:text-base">Seeking Opportunities</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I'm currently looking for an internship or junior role where I can contribute to 
                real-world AI projects. If you're looking for a dedicated learner to help with your ML 
                work, I'd love to chat!
              </p>
            </div>

            {/* telegram contact button */}
            <a href="https://t.me/theedevilhimself" target="_blank" rel="noopener noreferrer" className="block w-full">
              <AnimatedBorderButton className="w-full justify-center gap-2 py-6 text-base">
                Get in touch ASAP
                <ArrowUpRight className="w-5 h-5" />
              </AnimatedBorderButton>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};