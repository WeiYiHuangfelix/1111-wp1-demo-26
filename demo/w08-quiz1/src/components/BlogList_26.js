import React from 'react'
import Blog_26 from './Blog_26'

const BlogList_26 = ({items, removeItem}) => {
  // console.log(removeItem)
  // console.log('items',items)
  return (
    <div className="blogs-center">
      <Blog_26 removeItem={removeItem} items={items}/>
    </div>
  )
}

export default BlogList_26