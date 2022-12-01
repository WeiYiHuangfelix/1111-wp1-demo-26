import { Link } from 'react-router-dom';

const Navbar_xx = () => {
  return (
    <nav className='navbar'>
      <div>
        <h4>Hsingtai Chung -- 210410626</h4>
      </div>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/p1_xx'>p1_xx</Link>
        <Link to='/p2_xx'>p2_xx</Link>
        <Link to='/p3_xx'>p3_xx</Link>
        <Link to='/p4_xx'>p4_xx</Link>
        <Link to='/p5_xx'>p5_xx</Link>
        <Link to='/p6_xx'>p6_xx</Link>
      </div>
    </nav>
  );
};

export default Navbar_xx;
