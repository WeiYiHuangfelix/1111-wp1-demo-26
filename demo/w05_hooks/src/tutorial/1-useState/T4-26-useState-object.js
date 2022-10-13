import React, { useState } from 'react';

const T4_26_UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'weiyi',
    age: '36',
    message: 'random message'
  });

  const changeMessage = () => {
    setPerson({...person, message: 'weiyi 210410626'});
  }

  //Fragment
  return <> 
  <h3>{person.name}</h3>
  <h3>{person.age}</h3>
  <h3>{person.message}</h3>
  <button className='btn' onClick={changeMessage}>Change Message</button>
  </>;
};

export default T4_26_UseStateObject;
