import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home_26 from './pages/Home_26';
import About_26 from './pages/About_26';
import Products_26 from './pages/Products_26';
import Error_26 from './pages/Error_26';
import SharedLayout_26 from './pages/SharedLayout_26';
import SharedProductLayout_26 from './pages/SharedProductLayout_26';
import SingleProduct_26 from './pages/SingleProduct_26';
import Booklist_26 from './pages/Booklist_26';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<SharedLayout_26 />}>
          <Route index element = {<Home_26 />} />
          <Route path = 'about' element = {<About_26 />} />
          <Route path = 'Products' element = {<SharedProductLayout_26 />} >
          <Route index element = {<Products_26 />} />
          <Route path = ":productId" element = {<SingleProduct_26 />}/>
          </Route>
          <Route path ="booklist" element = {<Booklist_26 />} />
          <Route path = '*' element = {<Error_26 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
