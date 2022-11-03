import React from 'react'
import Book_26 from '../components/w02-booklist/Book_26';
import {booklist_data} from '../booklist_data';

const Booklist_26 = () => {
  return (
    <section className='booklist'>
    {booklist_data.map((book, index)=> {
      const {id, img, title, author} = book;
      return <Book_26 key = {id} img = {book.img} title = {book.title} author = {book.author}/>
    })}
  </section>
  );
};

export default Booklist_26;