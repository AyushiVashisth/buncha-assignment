// Import necessary dependencies
import React from 'react';
import { useSelector } from 'react-redux'; // Import useSelector from react-redux to access the Redux store
import cart from '../assests/cart.png'; // Import cart image
import sharelog from '../assests/sharelog.png'; // Import sharelog image
import { RootState } from '../redux/store'; // Import RootState type from the Redux store

// Define the Navbar functional component
const Navbar = () => {
  // Use the useSelector hook to select data from the Redux store
  const cartItems = useSelector((state: RootState) => state.cart);

  return (
    // Render a navigation bar with a yellow background
    <div className="bg-yellow-200 flex justify-between items-center font-mono text-sm md:text-sm font-semibold border border-white shadow-md p-2 sticky top-0 z-10">
      {/* Display the "E-commerce" text */}
      <div className="text-md md:text-lg lg:text-xl xl:text-2xl">E-commerce</div>
      
      {/* Display sharelog icon and text */}
      <div className="flex gap-2 items-center ml-auto">
        <div className="inline-flex items-center bg-white rounded-full p-1 md:p-2 lg:p-3 shadow-md">
          <img src={sharelog} alt="Share Icon" className="w-4 h-4 md:w-4 md:h-4 lg:w-6 lg:h-6 xl:w-6 xl:h-6" />
          <span className="hidden md:inline lg:inline xl:inline">Share Logs</span>
        </div>
        
        {/* Display cart icon and the number of items in the cart */}
        <div className="flex items-center bg-white rounded-full p-1 md:p-2 lg:p-3 shadow-md">
          <img src={cart} alt="Shopping Icon" className="w-6 h-6 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6" />
          <span className="text-black font-medium ml-1 md:ml-2 lg:ml-3 xl:ml-4">
            {cartItems.length} {/* Display the number of items in the cart */}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
