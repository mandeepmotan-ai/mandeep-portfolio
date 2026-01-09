import { useState } from 'react';

import { Navbar } from "@/layout/Navbar"
import { Hero } from "@/sections/Hero"
import { About } from "@/sections/About"
import { Certificates } from "@/sections/Certificates"
// import { Projects } from "@/sections/Projects"
import { Experience } from "@/sections/Experience"
import { Testimonials } from "@/sections/Testimonials"
import { Contact } from "@/sections/Contact"


function App() { 
  const [count, setCount] = useState(0)

  return <div className="min-h-screen overflow-x-hidden">
    <Navbar/> 
    <main>
      <Hero/>
      <About/>
      <Certificates/>
      {/* <Projects/> */}
      <Experience/>
      <Testimonials/>
      <Contact/>

    </main>
  
  </div>
}

export default App
