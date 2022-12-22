import React from 'react';

import { useGlobalContext_xx } from './Context_26';

// components
import Navbar_26 from './components/Navbar_26';
import CartContainer_26 from './components/CartContainer_26';
// items

const App_26 = () => {
  const { loading, cart } = useGlobalContext_xx();
  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <main>
      <Navbar_26 />
      <CartContainer_26 />
    </main>
  );
};

export default App_26;
