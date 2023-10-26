import React from 'react';
import { useSelector } from 'react-redux';
import AllProducts from '../allProducts/AllProducts.jsx';
import { Categories } from '../index.js';

/**
 * COMPONENT
 */
const Home = (props) => {
    const username = useSelector((state) => state.auth.me.username);

  return (
    <div>
      <AllProducts/>
    </div>
  );
};

export default Home;
