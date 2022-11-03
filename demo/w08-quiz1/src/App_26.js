import React, { useState, useEffect } from 'react';
import BlogList_26 from './components/BlogList_26'
import data from'./components/BlogData_26js'
import Alert_26 from './components/Alert_26'

const App_26 = () => {
  const [list, setList] = useState(data)
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: ''
  });


  const filterItems = (category) => {
    category = category.target.innerHTML
    console.log(category)
    if(category === 'all'){
      setList(data)
    }else{
      const newItems = data.filter((data) => data.span === category)
      setList(newItems)
      console.log(newItems)
    }}

  const showAlert = (show = false, msg = '', type = '') =>{
    setAlert({show, msg, type})
  }


  const removeItem = (id) =>{
    showAlert(true, 'item removed', 'danger')
    setList(list.filter((item)=>item.id !== id))
  }

  const clearList = () =>{
    showAlert(true, 'empty list', 'danger')
    setList([])
  }

  return (
    <>
      <section className="blog">
      {alert.show && <Alert_26 {...alert} removeAlert={showAlert}/>}
      <div className="section-title">
        <h2>CSS Grid using breakpoints</h2>
      </div>
      <div className="filter-container">
        <button type="button" className="filter-btn" data-id="all" onClick={filterItems}>
        all
      </button><button type="button" className="filter-btn" data-id="lifestyle" onClick={filterItems}>
        lifestyle
      </button><button type="button" className="filter-btn" data-id="travel"  onClick={filterItems}>
        travel
      </button></div>
      <BlogList_26 items={list} removeItem={removeItem}/>
      <button className='clear-btn' onClick={clearList}>Clear all blogs</button>
      </section>
    </>
  );
};

export default App_26;
