import React from 'react'
import Book_26 from './Book_26';
import {data} from './data';

const Booklist_26 = () => {
  return (
    <section className='booklist'>
    {data.map((book, index)=> {
      const {id, img, title, author} = book;
      return <Book_26 key = {id} img = {book.img} title = {book.title} author = {book.author}/>
    })}
  </section>
  );
};

export default Booklist_26;