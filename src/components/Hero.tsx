import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('banner.png')"
        }}
      />
      <div className="absolute inset-0 bg-black/50" />
    </section>
  );
};

export default Hero;