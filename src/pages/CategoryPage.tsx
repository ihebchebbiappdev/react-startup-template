import React from 'react';
import { useParams } from 'react-router-dom';
import TopNavbar from '../components/TopNavbar';
import BrandNavbar from '../components/BrandNavbar';
import MainNavbar from '../components/MainNavbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const CategoryPage = () => {
  const { category } = useParams();
  
  console.log('Current category:', category);

  return (
    <div className="min-h-screen relative">
      <TopNavbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default CategoryPage;