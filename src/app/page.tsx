import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import WorkExperience from '@/components/WorkExperience';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import ScrollProgress from '@/components/ScrollProgress';

export default function Home() {
    return (
        <>
            <ScrollProgress />
            <Hero />
            <About />
            <Skills />
            <WorkExperience />
            <Education />
            <Certifications />
            <Contact />
        </>
    );
}
