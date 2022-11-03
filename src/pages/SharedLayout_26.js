import { Outlet } from 'react-router-dom';
import Navbar_26 from '../components/Navbar_26';

const SharedLayout_26 = () => {
  return (
    <>
    <Navbar_26 />
      <section className='section'>
        <Outlet />
      </section>
    </>
  );
};
export default SharedLayout_26;