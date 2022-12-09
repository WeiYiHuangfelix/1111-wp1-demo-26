import React, { useState, useContext } from 'react';
import data from './blogData_26';
import Alert_26 from './components/Alert_26';
import BlogList_26 from './components/BlogList_26';
import { useBlogContext_26 } from './BlogContext_26';

const App_26 = () => {
  const { blogs, alert, removeItem, clearBlogs, filterItems, showAlert } =
    useBlogContext_26();
  return (
    <section className="blogs">
      {alert.show && <Alert_26 {...alert} removeAlert={showAlert} />}
      <div className="section-title">
        <h2>CSS Grid using breakpoints</h2>
      </div>
      <div className="filter-container">
        <button
          type="button"
          className="filter-btn"
          onClick={() => filterItems('all')}
        >
          all
        </button>
        <button
          type="button"
          className="filter-btn"
          onClick={() => filterItems('lifestyle')}
        >
          lifestyle
        </button>
        <button
          type="button"
          className="filter-btn"
          onClick={() => filterItems('travel')}
        >
          travel
        </button>
      </div>
      <div className="blogs-center">
        <BlogList_26 key={1} blogs={blogs} removeItem={removeItem} />
      </div>
      <button className="clear-btn" onClick={clearBlogs}>
        clear all blogs
      </button>
    </section>
  );
};

export default App_26;
