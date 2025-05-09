import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Helmet } from "react-helmet";

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>SoftSell - Maximize the Value of Your Software Licenses</title>
        <meta
          name="description"
          content="SoftSell helps businesses sell unused software licenses for maximum value. Upload, get a valuation, and get paid quickly and securely."
        />
        <meta
          name="keywords"
          content="software resale, license marketplace, sell software licenses, software license valuation"
        />
        {/* Open Graph tags */}
        <meta property="og:title" content="SoftSell - Software License Marketplace" />
        <meta
          property="og:description"
          content="Turn unused software licenses into instant cash with SoftSell. Get up to 70% of original purchase price."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://softsell.com" />
        <link rel="canonical" href="https://softsell.com" />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <HowItWorks />
          <WhyChooseUs />
          <Testimonials />
          <ContactForm />
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </>
  );
};

export default Home;
