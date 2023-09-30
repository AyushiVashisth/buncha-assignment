import React, { useState, useEffect } from 'react';
import CategoryPanel from './CategoryPanel';
import Sidebar from './Sidebar';
import './ScrollSync.css';

// Define the props for the ScrollSync component
interface ScrollSyncProps {
  categories: string[]; // An array of category names
  products: any[]; // An array of product data (you can replace 'any' with a specific type if available)
}

const ScrollSync: React.FC<ScrollSyncProps> = ({ categories, products }) => {
  // Define state variables to track scroll position and selected category
  const [scrollPosition, setScrollPosition] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  // Log the categories and products when the component renders
  console.log("Scroll", categories, products);

  // Use the useEffect hook to add and remove a scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Use the useEffect hook to update the selected category based on scroll position
  useEffect(() => {
    const categoryHeight = 100; // Adjust this value as needed
    const categoryIndex = Math.floor(scrollPosition / categoryHeight);

    if (categoryIndex >= 0 && categoryIndex < categories.length) {
      setSelectedCategory(categories[categoryIndex]);
    }
  }, [scrollPosition, categories]);

  // Handle the selection of a category from the CategoryPanel
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);

    // Scroll to the corresponding position in the content area
    const categoryIndex = categories.indexOf(category);
    const categoryHeight = 350; // Adjust this value to match your category panel item height

    if (categoryIndex !== -1) {
      const scrollToY = categoryIndex * categoryHeight;
      window.scrollTo({ top: scrollToY, behavior: 'smooth' });
    }
  };

  return (
    <div className="scroll-sync">
      {/* Render the CategoryPanel component */}
      <CategoryPanel
        categories={categories}
        onCategorySelect={handleCategorySelect}
      />

      <div className="product_sidebar">
        {/* Map over the categories and render the Sidebar component for each */}
        {categories.map((category, index) => {
          return (
            <Sidebar
              key={index}
              categorie={category} // Pass the category name as 'categorie' prop
              selectedCategory={selectedCategory}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ScrollSync;
