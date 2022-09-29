import React, { useState } from 'react';

const T2_26_UseStateBasics = () => {
  //let title = 'random title'
  const [title, setTitle] = useState('random title');
  const handleClick = () => {
    setTitle('Hello world');
    console.log('title', title);
  }
  console.log('title1', title);
  return (
    <>
    <h2>{title}</h2>
    <button type="button" className='btn' onClick={handleClick}>change title</button>
    </>
  );
};

export default T2_26_UseStateBasics;
