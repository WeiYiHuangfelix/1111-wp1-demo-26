import React from 'react';
import Blog_26 from './Blog_26';
import { useBlogContext_26 } from '../BlogContext_26';
const BlogList_26 = () => {
  const { blogs } = useBlogContext_26();
  return (
    <div className="blogs-center">
      {blogs.map((blog) => {
        const { id, img, title, desc, category } = blog;
        return (
          <Blog_26
            key={id}
            id={id}
            img={img}
            title={title}
            desc={desc}
            category={category}
          />
        );
      })}
    </div>
  );
};

export default BlogList_26;
