import { ArrowUpRight, Github, } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [

]

// const projects = [
//     {
//         title: "Lane Detection System",
//         description: 
//             "A Computer Vision experiment using OpenCV to identify road lanes. Focused on image processing techniques like Canny edge detection and Hough transforms.",
//         image: "/projects/lane-detection.jpg", 
//         tags: ["Python", "OpenCV", "NumPy"],
//         link: "#", // Add your repo link here
//         github: "#",
//     },
//     {
//         title: "Real-time Object Classifier",
//         description:
//             "Implementing a pre-trained SSD MobileNet model to detect objects in real-time. Currently exploring how to optimize inference speed for low-power devices.",
//         image: "/projects/object-detection.jpg",
//         tags: ["TensorFlow", "Python", "Deep Learning"],
//         link: "#",
//         github: "#",
//   },
// ]

export const Projects = () => {
    return (
    <section id="projects" className="py-32 relative overflow-hidden ">
        {/* Background glows CSS  */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
            {/* Projects Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-primary text-sm font-medium tracking-widest uppercase">
                    My Learning Path
                </span>
                <h2 className="text-3xl md:text-5xl font-bold mt-4 text-white">
                    Current Lab Work <br />
                    <span className="font-serif italic text-primary/80">& Recent Projects</span>
                </h2>
                <p className="text-muted-foreground mt-4 text-sm md:text-base max-w-xl mx-auto">
                    A collection of experiments, community contributions, and early prototypes as I explore 
                    the world of AI and MLOps.
                </p>
            </div>

            {/* Projects Showcase Grid  */}
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                    <div key={idx} 
                        className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                        style={{animationDelay: `${(idx + 1) * 100}ms`}}
                        >

                        {/* Image showcasing div  */}
                        <div className="relative overflow-hidden aspect-video">
                            <img src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                                {/* Overlay links to external projects  */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                        <ArrowUpRight className="w-5 h-5 " />
                                    </a>
                                    <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                        <Github className="w-5 h-5 " />
                                    </a>
                                </div>
                        </div>

                        {/* Content  */}
                        <div className="p-6 space-y-4">
                            <div className="flex items-start justify-between ">
                                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-all" />
                            </div>
                            <p className="text-muted-foreground text-sm">{project.description}</p>
                            <div className="flex flex-wrap gap-2 ">
                                {project.tags.map((tag, tagIdx) => (
                                    <span key={tagIdx}
                                        className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300 ">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}

            </div>

            {/* view all CTA  */}
            <div className="text-center mt-12 animate-fade-in animation-delay-500 ">
            <a href="https://github.com/mandeepmotan-ai" target="_blank" rel="noopener noreferrer" className="inline-block">
                <AnimatedBorderButton>  
                    View All Projects 
                    <ArrowUpRight className="w-5 h-5"/>
                </AnimatedBorderButton>
            </a>
            </div>
        </div>
    </section>

    );
};