import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage_xx from './pages/HomePage_xx';
import ErrorPage_xx from './pages/ErrorPage_xx';
import SharedLayout_xx from './pages/SharedLayout_xx';

import P1Page_xx from './pages/P1Page_xx';
import P2Page_xx from './pages/P2Page_xx';
import P3Page_xx from './pages/P3Page_xx';
import P4Page_xx from './pages/P4Page_xx';
import P5Page_xx from './pages/P5Page_xx';
import P6Page_xx from './pages/P6Page_xx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout_xx />}>
          <Route index element={<HomePage_xx />} />
          <Route path='p1_xx' element={<P1Page_xx />} />
          <Route path='p2_xx' element={<P2Page_xx />} />
          <Route path='p3_xx' element={<P3Page_xx />} />
          <Route path='p4_xx' element={<P4Page_xx />} />
          <Route path='p5_xx' element={<P5Page_xx />} />
          <Route path='p6_xx' element={<P6Page_xx />} />
          <Route path='*' element={<ErrorPage_xx />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
