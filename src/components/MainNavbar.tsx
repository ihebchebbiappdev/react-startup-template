import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="absolute w-full z-20 text-center lg:top-[160px] top-[120px] px-4 font-['WomanFontBold']">
        <div className={`
          lg:flex lg:justify-center lg:gap-14
          ${isOpen ? 'block glass-effect py-6 lg:py-0 mt-12 lg:mt-0' : 'hidden'}
          lg:block
        `}>
          <div className="flex flex-col lg:flex-row lg:gap-14 gap-6 items-center">
            <Link to="/category/le-monde-fiori" className="nav-link text-[#700100] text-[16px] lg:text-[21px] hover:text-red-400 transition-colors">
              Le monde Fiori
            </Link>
            <Link to="/category/univers-cadeaux" className="nav-link text-[#700100] text-[16px] lg:text-[21px] hover:text-red-400 transition-colors">
              L'univers Cadeaux
            </Link>
            <Link to="/category/pret-a-porter" className="nav-link text-[#700100] text-[16px] lg:text-[21px] hover:text-red-400 transition-colors">
              Le prêt à porter
            </Link>
            <Link to="/category/accessoires" className="nav-link text-[#700100] text-[16px] lg:text-[21px] hover:text-red-400 transition-colors">
              Accessoires
            </Link>
            <Link to="/category/sur-mesure" className="nav-link text-[#700100] text-[16px] lg:text-[21px] hover:text-red-400 transition-colors">
              Sur mesure
            </Link>
            <Link to="/category/outlet" className="nav-link text-[#700100] text-[16px] lg:text-[21px] hover:text-red-400 transition-colors">
              Outlet
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNavbar;