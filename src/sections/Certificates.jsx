import { ArrowUpRight, Github, } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const certificates = [
    {
        title: "Software Engineer Professional Certification",
        description: 
            "Verified proficiency in software engineering core competencies by passing the HackerRank role certification test.",
        image: "/certificates/software_engineer_certificate.png",
        tags: ["Software Engineering", "Problem Solving", "HackerRank"],
        link: "https://www.hackerrank.com/certificates/ff51ff7528fa", // Based on Certificate ID: FF51FF7528FA
        // github: "", 
    },
    {
     title: "SQL (Intermediate) Certification",
        description: 
            "Demonstrated proficiency in complex SQL queries, including joins, subqueries, and aggregations through HackerRank's skill certification.",
        image: "/certificates/sql_intermediate_certificate.png", // Ensure this matches your file name in public/certificates
        tags: ["SQL", "Databases", "Data Analysis", "HackerRank"],
        link: "https://www.hackerrank.com/certificates/3c8a7cc96c36", // Based on Certificate ID: 3C8A7CC96C36
        // github: "#", 
},


]

export const Certificates = () => {
    return (
    <section id="certificates" className="py-32 relative overflow-hidden ">
        {/* Background glows CSS  */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">

            {/* section header */}
            <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in ">
                    Verified Expertise
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                    Certifications & 
                    <span className="font-serif italic font-normal text-white">{" "}Accreditations.</span>
                </h2>
                <p className="text-muted-foreground animate-fade-in animation-delay-200">
                    A collection of professional certifications and specialized training that validate my technical skills and commitment to continuous learning in the ever-evolving tech landscape.
                </p>
            </div>

            {/* Projects Showcase Grid  */}
            <div className="grid md:grid-cols-2 gap-8">
                {certificates.map((project, idx) => (
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
                                {/* Overlay links to external certificates  */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                        <ArrowUpRight className="w-5 h-5 " />
                                    </a>
                                    {/* <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"> */}
                                    {/* <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                        <Github className="w-5 h-5 " />
                                    </a> */}
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
                    View All Certificates 
                    <ArrowUpRight className="w-5 h-5"/>
                    </AnimatedBorderButton>
                </a>
            </div>
        </div>
    </section>

    );
};