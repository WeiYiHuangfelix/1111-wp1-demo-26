import React from 'react';

const T1_26_ErrorExample = () => {
  let title = 'random itle'
  const handleClick = () => {
    title = 'Hello world';
    console.log('title', title);
  }
  return (
    <>
    <h2>{title}</h2>
    <button type="button" className='btn' onClick={handleClick}>change title</button>
    </>
  );
};

export default T1_26_ErrorExample;
