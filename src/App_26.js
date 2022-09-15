//import logo from './logo.svg';
import './App_26.css';

// const firstBook = {
//   img: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/51mDSB+k7YL._SX327_BO1,204,203,200_.jpg',
//   title: 'Fairy Tale Hardcover',
//   author: 'Stephen King'
// }

// const secondBook = {
//   img: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/41NYMVpimkL._SX398_BO1,204,203,200_.jpg',
//   title: "Radio's Greatest of All Time Hardcover",
//   author: 'Rush Limbaugh'
// }

// const thirdBook = {
//   img: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/51YhD015-iL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
//   title: "Little Blue Truck's Halloween: A Halloween Book for Kids",
//   author: 'Alice Schertle'
// }

const data = [{
  id: 1,
  img: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/51mDSB+k7YL._SX327_BO1,204,203,200_.jpg',
  title: 'Fairy Tale Hardcover',
  author: 'Stephen King',
},
{
  id: 2,
  img: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/41NYMVpimkL._SX398_BO1,204,203,200_.jpg',
  title: "Radio's Greatest of All Time Hardcover",
  author: 'Rush Limbaugh',
},
{
  id: 3,
  img: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/51YhD015-iL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
  title: "Little Blue Truck's Halloween: A Halloween Book for Kids",
  author: 'Alice Schertle',
},
{
  id: 4,
  img: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/41d1gVUK1yL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
  title: "Verity Paperback",
  author: 'Colleen Hoover',
},
{
  id: 5,
  img: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/41fT9sjplKL._SX320_BO1,204,203,200_.jpg',
  title: 'Ugly Love: A Novel Paperback',
  author: "Colleen Hoover",
},
];
const App_26 = () => {
  return (
    <section className='booklist'>
      {data.map((book, index)=> {
        const {id, img, title, author} = book;
        return <Book_26 key = {id} img = {book.img} title = {book.title} author = {book.author}/>
      })}
    </section>
  );
}

const Book_26 = ({img, title, author}) => {
  // console.log('props', props);
  // const {img, title, author} = props;
  return (
    <article className='book'>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

export default App_26;
