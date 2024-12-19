import React from 'react';
import TopNavbar from '../components/TopNavbar';
import BrandNavbar from '../components/BrandNavbar';
import MainNavbar from '../components/MainNavbar';
import BrandIntro from '../components/BrandIntro';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Men from '../components/Men';
import NewCollection from '../components/NewCollection';
import BrandLocation from '../components/BrandLocation';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <TopNavbar />
      <BrandNavbar />
      <MainNavbar />
      <Hero />
      <Products />
      <Men />
      <BrandIntro />
      <NewCollection />
      <BrandLocation />
      <Footer />

      {/* WhatsApp Button with Controlled Ping Effect and Mobile Responsiveness */}
      <div className="fixed bottom-8 right-8 z-50 scale-100 md:scale-105">
        {/* Pulsing Background Effect with 7s interval */}
        <div className="absolute inset-0 rounded-full bg-[#471818]/40 animate-[ping_7s_ease-in-out_infinite]"></div>
        
        {/* Main Button */}
        <a
          href="https://wa.me/+21600000000"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center gap-4 
                   bg-gradient-to-r from-[#471818]/90 to-[#700100]/90
                   hover:from-[#471818] hover:to-[#700100]
                   backdrop-blur-md rounded-full 
                   px-4 py-3 md:px-7 md:py-4
                   transform hover:scale-105 
                   transition-all duration-300 ease-in-out
                   shadow-lg hover:shadow-2xl
                   border border-white/20
                   group overflow-hidden
                   scale-95 md:scale-100"
        >
          {/* Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                        translate-x-[-200%] group-hover:translate-x-[200%]
                        transition-transform duration-1000"></div>
          
          {/* WhatsApp Icon with Animation */}
          <div className="relative transform group-hover:rotate-12 transition-transform duration-300">
            <svg
              className="w-5 h-5 md:w-7 md:h-7 text-white drop-shadow-lg"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
            </svg>
          </div>

          {/* Text with Animation */}
          <span className="text-white font-['WomanFontBold'] text-sm md:text-lg tracking-wide
                         transform group-hover:scale-105 transition-transform duration-300
                         drop-shadow-lg">
            WhatsApp
          </span>
        </a>
      </div>
    </div>
  );
};

export default Index;