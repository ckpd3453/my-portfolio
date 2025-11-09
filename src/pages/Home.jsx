import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-800">
            <div className="container mx-auto p-6 lg:p-12 space-y-6">
                <Header />
                <About />
                <Experience />
                <Projects />
                <Education />
                <Contact />
                <Footer />
            </div>
        </div>
    );
}