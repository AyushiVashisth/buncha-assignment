import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, addToCart } from '../redux/cartSlice';
import { products } from '../assests/data';

// Define the props for the Sidebar component
interface SidebarProps {
  categorie: string; // The category name for this Sidebar
  selectedCategory: string; // The currently selected category
}

const Sidebar: React.FC<SidebarProps> = ({ categorie, selectedCategory }) => {
  // Use the useSelector hook to get the cart items from the Redux store
  const cartItems = useSelector((state: any) => state.cart);
  const dispatch = useDispatch(); // Get the dispatch function to dispatch Redux actions

  return (
    <div className="sidebar ml-52 mt-14">
      {/* Display the category name */}
      <h3 className="text-lg font-semibold">{categorie}</h3>
      <ul className="max-h-270 overflow-auto flex flex-wrap gap-4 list-none">
        {/* Map over the products and render each product in the Sidebar */}
        {products.map((product) => (
          <li
            key={product.product_id}
            className={`w-40 h-60 text-center p-2 relative ${
              selectedCategory === categorie ? 'selected' : ''
            }`}
          >
            <div>
              {/* Display the product image */}
              <img
                src={product.product_image_url}
                alt=""
                className="w-32 h-32 mx-auto mb-2"
              />
              {/* Display the product name */}
              <h4 className="text-sm font-semibold">
                {product.product_name}
              </h4>
              {/* Display the product price */}
              <p className="text-xs">Price: ${product.product_price.toFixed(2)}</p>
              <div className="buttons flex items-center justify-center absolute top-1/2 right-0 transform -translate-y-1/2">
                {/* Render a '-' button if the product is in the cart */}
                {cartItems.length > 0 &&
                cartItems.find(
                  (item: any) => item.product_id === product.product_id
                ) ? (
                  <button
                    onClick={() => dispatch(removeFromCart(product))}
                    className="text-2xl bg-green-500 rounded-full w-8 h-8"
                  >
                    -
                  </button>
                ) : (
                  /* Render a '+' button if the product is not in the cart */
                  <button
                    onClick={() => dispatch(addToCart(product))}
                    className="text-2xl bg-blue-500 rounded-full w-6 h-6"
                  >
                    <div>+</div>
                  </button>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
