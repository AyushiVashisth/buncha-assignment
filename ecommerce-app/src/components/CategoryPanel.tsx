import React from 'react';

// Define props interface for the CategoryPanel component
interface CategoryPanelProps {
  categories: string[]; // An array of category names to display
  onCategorySelect: (category: string) => void; // A callback function to handle category selection
}

// CategoryPanel is a functional component that displays a list of categories
const CategoryPanel: React.FC<CategoryPanelProps> = ({ categories, onCategorySelect }) => {
  console.log("CategoryPanel", categories);

  return (
    <>
      {/* Fixed position panel to display categories */}
      <div className="fixed top-16 left-0 text-center z-20 p-4">
        <div className="block">
          {/* Heading for categories */}
          <h3 className="text-black">Categories</h3>
          {/* List of categories */}
          <ul className="grid grid-rows-1 gap-y-10 mt-2">
            {categories.map((category, index) => (
              <li
                key={index}
                onClick={() => onCategorySelect(category)} // Call the provided callback function when a category is clicked
                className="cursor-pointer text-black"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CategoryPanel;
