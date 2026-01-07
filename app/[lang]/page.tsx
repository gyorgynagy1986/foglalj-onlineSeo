import Hero from "@/components/hero";
import Features from "@/components/features";
import BookingManagement from "@/components/stats";
import BookingForms from "@/components/booking-forms";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import CTA from "@/components/cta";
import Support from "@/components/support"; // <--- Importáld be
import Contact from "@/components/contact";
import { getDictionary } from "@/app/[lang]/dictionaries"; // Feltételezve, hogy itt található

interface HomeProps {
  params: Promise<{ lang: string }>;
}

export default async function Home({ params }: HomeProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <main id="home">
        {/* 1. BEVEZETÉS */}
        <Hero dict={dict.hero} lang={lang} />

        {/* 2. FUNKCIÓK ÁTTEKINTÉSE */}
        <Features dict={dict.features} />

        {/* 3. TERMÉK BEMUTATÁSA (A "wow" faktor) */}
        {/* Érdemesebb előbb megmutatni a szoftvert, mielőtt a supportról beszélsz */}
        <BookingManagement dict={dict.bookingManagement} />
        <BookingForms dict={dict.bookingForms} />

        {/* 4. BIZALOMÉPÍTÉS (Trust) */}
        {/* Itt a legjobb helye a Supportnak: "Látom, hogy jó a szoftver, de mi van ha elakadok?" */}
        <Support dict={dict.support} />
        <Testimonials dict={dict.testimonials} />

        {/* 5. ÉRTÉKESÍTÉS */}
        <Pricing dict={dict.pricing} />

        {/* 6. LEZÁRÁS */}
        <FAQ dict={dict.faq} />
        <CTA dict={dict.cta} />
        <Contact dict={dict.contact} />
      </main>
    </>
  );
}
