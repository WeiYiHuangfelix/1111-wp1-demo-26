import React, { useState } from 'react';
import { data } from '../../data';

const T3_26_UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removeItme = (id) => {
    let newPeople = people.filter( (person) => person.id !== id);
    setPeople(newPeople);
  };

  console.log('people', people);
  return (
    <>
      {people.map( (person) => {
        const {id, name} = person;
          return (
            <div key={id} className='item'>
              <h4>{name}</h4>
              <button onClick={ () => removeItme(id)}>Remove</button>
            </div>
          )
      })}
    </>
  );
};

export default T3_26_UseStateArray;
