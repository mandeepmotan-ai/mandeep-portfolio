
const experiences = [
    {
        period: "2025 — Present",
        role: "AI/ML Project Developer",
        company: "Self-Directed Research",
        description:
            "Building and fine-tuning computer vision models. Focused on the transition from training notebooks to functional prototypes, exploring how models handle real-world visual data.",
        technologies: ["Python", "TensorFlow", "OpenCV", "Scikit-learn"],
        current: true,
    },
    {
        period: "2025",
        role: "MLOps Explorer",
        company: "Personal Lab",
        description:
            "Experimenting with model deployment pipelines. Learning to containerize ML environments and manage version control for both code and datasets to ensure reproducible results.",
        technologies: ["Docker", "Git", "Conda", "Linux"],
        current: true,
    },
    {
        period: "2025",
        role: "Open Source Contributor",
        company: "GitHub Community",
        description:
            "Active in contributing to community projects. Learning professional workflows and collaborating with other developers on open-source codebases.",
        technologies: ["Git", "GitHub", "Python"],
        current: true,
    },
    {
        period: "2024 — 2025",
        role: "Junior Web Developer",
        company: "Freelance",
        description:
            "Built responsive interfaces for clients. This background helps me now when building user-friendly frontends for my AI prototypes.",
        technologies: ["React", "Tailwind CSS", "JavaScript"],
        current: false,
    },
];


export const Experience = () => {
    return (
        <section id="experience" className="py-32 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"/>
            <div className="container mx-auto px-6 relative z-10 ">
                {/* section header  */}
                {/* <div className="max-w-3xl mb-6">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Career Journey</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Experience that 
                        <span className="font-serif italic font-normal text-white">{" "}speaks volume.</span>
                    </h2>

                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A timeline of professional growth, from curious beginner to senior engineer leading teams and building projects at scale.
                    </p>
                </div> */}
                <div className="max-w-3xl mb-6">
    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
        The Path
    </span>
    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
        Proof is in the 
        <span className="font-serif italic font-normal text-white">{" "}shipping.</span>
    </h2>

    <p className="text-muted-foreground animate-fade-in animation-delay-200 text-lg">
        I don't just study theory; I build. Whether it's helping a business get online 
        or training models in my local lab, I'm focused on putting code into production 
        and making things actually work.
    </p>
</div>

                {/* Time line section  */}
                <div className="relative">
                    <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

                    {/* Experience Items  */}
                    <div className="space-y-12">
                        {experiences.map((exp, idx) => (
                            <div key={idx} 
                                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                                style={{animationDelay: `${(idx + 1) *150}ms`}}
                            >
                                    {/* Timeline  */}
                                    <div
                                     className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-background z-10"
                                        // className="absolute left-0 md:left-1/2 top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-20 shadow-[0_0_15px_rgba(32,178,166,0.6)]"
                                        >
                                         {exp.current && (<span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"/>)}
                                    </div>

                                    {/* Content Part of timeline  */}
                                    <div className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"} `}>
                                        <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                                            <span className="text-sm text-primary font-medium">
                                                {exp.period}
                                            </span>
                                            <h3 className="text-xl font-semibold mt-2">
                                                {exp.role}
                                            </h3>
                                            <p className="text-muted-foreground">
                                                {exp.company}
                                            </p>
                                            <p className="text-sm text-muted-foreground mt-4">
                                                {exp.description}
                                                </p>
                                            <div className={` flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""}`}>
                                                {exp.technologies.map((tech, techIdx) => (
                                                <span key={techIdx} 
                                                    className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground">
                                                    {tech}
                                                </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        ))}

                    </div>
                </div>

            </div>

        </section>
    );
};