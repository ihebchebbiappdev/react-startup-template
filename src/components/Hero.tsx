import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 gradient-bg">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
        Welcome to Your New Project
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
        Start building something amazing with React, Tailwind CSS, and modern web technologies.
        This template gives you a perfect foundation to create beautiful applications.
      </p>
      <Button className="text-lg px-8 py-6" size="lg">
        Get Started
      </Button>
    </div>
  );
};

export default Hero;