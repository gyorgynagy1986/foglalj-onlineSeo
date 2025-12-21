import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Stats from "@/components/stats";
import BookingForms from "@/components/booking-forms";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import CTA from "@/components/cta";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-6 focus:py-4 focus:bg-[var(--color-dark)] focus:text-white focus:rounded-xl"
      >
        Ugrás a fő tartalomra
      </a>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Stats />
        <BookingForms />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
