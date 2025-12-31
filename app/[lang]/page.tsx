import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
import BookingManagement from "@/components/stats";
import BookingForms from "@/components/booking-forms";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import CTA from "@/components/cta";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { getDictionary } from "@/app/[lang]/dictionaries"; // Feltételezve, hogy itt található

interface HomeProps {
  params: Promise<{ lang: string }>;
}

export default async function Home({ params }: HomeProps) {
  // Nyelv kinyerése és szótár betöltése
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <Navbar dict={dict.navbar} lang={lang} />

      <main id="home">
        <Hero dict={dict.hero} lang={lang} />
        <Features dict={dict.features} />
        <BookingManagement dict={dict.bookingManagement} />
        <BookingForms dict={dict.bookingForms} />
        <Pricing dict={dict.pricing} />
        <Testimonials dict={dict.testimonials} />
        <FAQ dict={dict.faq} />
        <CTA dict={dict.cta} />
        <Contact dict={dict.contact} />
      </main>

      <Footer dict={dict.footer} />
    </>
  );
}
