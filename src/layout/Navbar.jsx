import {Button} from "@/components/Button"
import { useEffect, useState } from 'react'; 
import { Menu, X } from 'lucide-react'; 

const navLinks = [
    {href: "#about", label: "About"},
    {href: "#certificates", label: "Certificates"},
    // {href: "#projects", label: "Projects"},
    {href: "#experience", label: "Experience"},
    {href: "#testimonials", label: "Testimonials"},
];


export const Navbar = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        }
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll)

    },[]);


 

    return (
    <header className={`fixed top-0 left-0 right-0 py-5 transition-all duration-500 ${isScrolled ? 'glass-strong py-3' : 'bg-transparent py-5'} z-50`}>
    {/* old header  */}
    {/* <header className="fixed top-0 left-0 right-0 bg-transparent py-5 z-50">  ? */} 
        <nav className="container mx-auto px-6 flex items-center justify-between ">
            <a href="#" className="group flex items-center gap-3 no-underline">
                <div className="relative flex items-center justify-center w-10 h-10">
                    <div className="absolute inset-0 border-2 border-primary/20 rounded-xl rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:shadow-primary/80 transition-all">
                        <span className="text-black font-black text-sm">M</span>
                    </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-background animate-pulse"></div>
                </div>

                <div className="flex flex-col leading-none">
                    <span className="text-xl font-bold tracking-tighter text-white group-hover:text-primary transition-colors">
                        MANDEEP<span className="text-primary">.</span>ai
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                        Computer Vision Lab
                    </span>
                </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1"> 
                <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                    {navLinks.map((link, index) => (
                        <a href={link.href} key={index} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">
                            {link.label}</a>
                    ))}
                </div>
            </div>

            {/* CTA btn (call to action button) */}
            {/* Desktop Button  */}
            <div className="hidden md:block">
                <a href="#contact"><Button size="sm">Contact Me</Button></a>
            </div>

            {/* Mobile menu Button  */}
            <button className="md:hidden p-2 text-foreground cursor-pointer" onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24}/>}
            </button>
        </nav>

        {/* Mobile Menu 
        {isMobileMenuOpen && (
        <div className="md:hidden glass">
                <div className="container mx-auto px-6 py-6 flex flex-col gap-4 ">
                    {navLinks.map((link, index) => (
                    <a href={link.href} key={index} className="text-lg text-muted-foreground hover:text-foreground py-2">
                        {link.label}
                    </a>
                ))}
                <Button>Contact Me</Button>
                </div>
                    
        </div>
        )} */}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
        <div className="md:hidden animate-fade-in absolute top-full left-0 right-0 glass-strong border-b border-white/5 z-40">
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
                {navLinks.map((link, index) => (
                <a 
                    href={link.href} 
                    key={index} 
                    className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)} // will close menu when i click
                >
                    {link.label}
                </a>
                ))}
                <a href="#contact"><Button className="w-full">Contact Me</Button></a>
            </div>
        </div>
        )}
        
    </header>
    )
};

