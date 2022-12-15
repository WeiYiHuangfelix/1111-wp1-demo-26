import React, { useState, useContext, Children } from 'react';
import data from './blogData_26';
import Alert_26 from './components/Alert_26';
import BlogList_26 from './components/BlogList_26';

const BlogContext_26 = React.createContext();

const BlogContextProvider_26 = ({ children }) => {
  const [blogs, setBlogs] = useState(data);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });

  const removeItem = (id) => {
    showAlert(true, 'blog removed', 'danger');
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type });
  };

  console.log('blogs', blogs);

  const clearBlogs = () => {
    showAlert(true, 'empty all blogs', 'danger');
    setBlogs([]);
  };

  const filterItems = (category) => {
    if (category === 'all') {
      setBlogs(data);
    } else {
      const newBlogs = data.filter((blog) => blog.category === category);
      setBlogs(newBlogs);
    }
  };

  return (
    <BlogContext_26.Provider
      value={{ blogs, alert, removeItem, clearBlogs, filterItems, showAlert }}
    >
      {children}
    </BlogContext_26.Provider>
  );
};

const useBlogContext_26 = () => {
  return useContext(BlogContext_26);
};

export { BlogContextProvider_26, useBlogContext_26 };
