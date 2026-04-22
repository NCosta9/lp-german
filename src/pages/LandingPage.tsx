import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PainSection from '../components/PainSection';
import SolutionSection from '../components/SolutionSection';
import HowItWorks from '../components/HowItWorks';
import Benefits from '../components/Benefits';
import AboutUs from '../components/AboutUs';
import Testimonials from '../components/Testimonials';
import LeadForm from '../components/LeadForm';
import CTAFinal from '../components/CTAFinal';
import Footer from '../components/Footer';

export default function LandingPage() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
    });
  }, []);

  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <PainSection />
      <SolutionSection />
      <HowItWorks />
      <Benefits />
      <AboutUs />
      <Testimonials />
      <LeadForm />
      <CTAFinal />
      <Footer />
    </div>
  );
}
