import React from 'react';
import ScrollSync from './ScrollSync';
import { products } from '../assests/data';

function Category() {
  // Define initial categories that will be displayed in the CategoryPanel
  const initialCategories = [
    'Produce',
    'Prepared foods',
    'Canned foods & Soups',
    'Produce',
    'Bakery',
    "Diary & Eggs",
    "Frozen",
    "Meats & Seafood",
    'Prepared foods',
    'Canned foods & Soups',
  ];

  // Render the ScrollSync component, passing initialCategories and products as props
  return (
    <div className="">
      {/* The ScrollSync component synchronizes scrolling between the CategoryPanel and Sidebar */}
      <ScrollSync categories={initialCategories} products={products} />
    </div>
  );
}

export default Category;
