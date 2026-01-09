import { Brain, Code, Database, Search } from "lucide-react";

const highlights = [
    {
        icon: Brain,
        title: "ML Foundations",
        description: "Strong grasp of supervised and unsupervised learning, focusing on implementing models that solve real-world problems.",
    },
    {
        icon: Code,
        title: "Model to Prototype",
        description: "Building functional AI applications using Python and FastAPI, moving beyond just notebooks into usable code.",
    },
    {
        icon: Database,
        title: "Data Exploration",
        description: "Hands-on experience with data cleaning, preprocessing, and augmentation to ensure models have high-quality training sets.",
    },
    {
        icon: Search,
        title: "Continuous Learner",
        description: "Actively exploring the latest in Gen AI and Computer Vision to stay at the forefront of the rapidly evolving AI landscape.",
    }
]


export const About = () => {
    return (
    <section id="about" className="py-32 relative overflow-hidden ">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left column  */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                        Turning data into intelligence,
                        <span className="font-serif italic font-normal text-white">{" "}one model at a time.</span>
                    </h2>

                    <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200 text-base md:text-lg">
                        <p>
                            I’m an AI/ML developer with a huge interest in Computer Vision. Right now, I’m 
                            focusing on learning how to build deep learning systems from scratch—starting 
                            from raw images all the way to getting a model running. I spend a lot of time 
                            working with CNNs and object detection to see how we can turn visual data 
                            into something useful for real-world tasks like navigation or medical scans.
                        </p>
                        <p>
                            My main tool is Python, and I’m big on "learning by doing." I’ve spent time 
                            implementing architectures like ResNet and YOLO using TensorFlow and OpenCV. 
                            Instead of just chasing high accuracy, I like to experiment with things like 
                            transfer learning and data augmentation to understand how to make models work 
                            better in tough, messy, real-world conditions.
                        </p>
                        <p>
                            I’m also really curious about the MLOps side of things. I don't want my models 
                            to just stay in a notebook, so I’ve been using Streamlit and FastAPI to build 
                            actual prototypes like real-time trackers. I’m looking for an internship 
                            where I can help a team build cool stuff while I keep sharpening my skills 
                            in production-level AI.
                        </p>
                    </div>

                    <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                        <p className="text-lg font-medium italic text-foreground ">
                            I’m driven by the challenge of moving models out of the research phase and into 
                            the real world. I enjoy building the infrastructure that turns an AI experiment 
                            into a functional tool people can actually use.
                        </p>
                    </div>

                </div>

                {/* Right column with Highlights  */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {highlights.map((item, idx) => (
                        <div key={idx} 
                            className="glass p-6 rounded-2xl animate-fade-in" 
                            style={{animationDelay: `${(idx + 1) * 100}ms`}}>
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                <item.icon className="w-6 h-6 tex-primary" />
                            </div>        
                            <h3 className="text-lg font-semibold mb-2 ">{item.title}</h3>
                            <p className="text-sm text-muted-foreground ">{item.description}</p>
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    </section>

    );
};