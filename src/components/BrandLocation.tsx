import React from 'react';

const BrandLocation = () => {
  const location1URL = "https://maps.google.com/?q=Les+Berges+du+Lac,+La+Marsa,+Tunisia";
  const location2URL = "https://maps.google.com/?q=Tunisia+Mall,+Tunisia";

  return (
    <section className="py-8 lg:py-16 px-4 flex flex-col items-center justify-center bg-gray-50">
      <div className="max-w-[1920px] mx-auto w-full">
        <h1 className="text-center text-[#591C1C] text-3xl md:text-4xl lg:text-5xl my-6 lg:my-10 font-['WomanFontBold']">
          Trouver un magasin
        </h1>
       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mt-6 lg:mt-10">
          {/* Location 1 */}
          <a
            href={location1URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-lg h-[400px] lg:h-[700px] group transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
              <img
                src="Thestore.png"
                alt="Fiori Les Berges du Lac"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-8 text-white bg-[#591C1C]/90
                             transition-all duration-300 group-hover:bg-[#591C1C] group-hover:h-1/3">
                <p className="text-lg lg:text-2xl leading-relaxed mb-2 font-['WomanFontBold']">
                  Rue du Lac Tibériade,<br />
                  Les Berges du lac, La Marsa, Tunisia
                </p>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs lg:text-sm font-['WomanFontBold']">
                  Cliquez pour ouvrir dans Google Maps →
                </span>
              </div>
            </div>
          </a>

          {/* Location 2 */}
          <a
            href={location2URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-lg h-[400px] lg:h-[700px] group transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
              <img
                src="Thestand.png"
                alt="Fiori Tunisia Mall"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-8 text-white bg-[#591C1C]/90
                             transition-all duration-300 group-hover:bg-[#591C1C] group-hover:h-1/3">
                <p className="text-lg lg:text-2xl leading-relaxed mb-2 font-['WomanFontBold']">
                  Tunisia mall en face Zara et Zayn
                </p>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs lg:text-sm font-['WomanFontBold']">
                  Cliquez pour ouvrir dans Google Maps →
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BrandLocation;