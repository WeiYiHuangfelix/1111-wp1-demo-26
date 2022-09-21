import { useState } from 'react';
import Category_26 from './components/Category_26';
import './App_26.css';
import Menu_26 from './components/Menu_26';
import items from './data';

const allCategories = ['all', 'breakfast', 'lunch', 'shakes', 'dinner']

const App_26 = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, steCategories] = useState(allCategories);

  console.log('menuItems', menuItems);
  return (
  <section className="menu">
    {/* <!-- title --> */}
    <div class="title">
      <h2>our menu</h2>
      <div class="underline"></div>
    </div>
    {/* <!-- filter buttons --> */}
    <Category_26 categories = {categories}/>

    <Menu_26 items={menuItems}/>
  </section>
  );
};

export default App_26;
