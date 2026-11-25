import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import WhyMontessori from "../components/WhyMontessori.jsx";
import Programs from "../components/Programs.jsx";
import DailyRoutine from "../components/DailyRoutine.jsx";
import Reviews from "../components/Reviews.jsx";
import EnquiryForm from "../components/EnquiryForm.jsx";
import VisitUs from "../components/VisitUs.jsx";
import Footer from "../components/Footer.jsx";
import FloatingContact from "../components/FloatingContact.jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyMontessori />
      <Programs />
      <DailyRoutine />
      <Reviews />
      <EnquiryForm />
      <VisitUs />
      <Footer />
      <FloatingContact />
    </>
  );
}