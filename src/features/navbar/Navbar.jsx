import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { logout } from '../../app/store';
import { fetchSingleUser } from '../userProfile/userProfileSlice';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const isAdmin = useSelector((state) => !!state.auth.me.isAdmin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate('/');
  };

  //selecting logged in user:
  const user = useSelector((state) => {
   return state.auth.me
  })


  useEffect(()=>{
    //dispatch(fetchSingleUser(user.id))
  },[])
  
  return (
    <div className='navbar'>
      <Link to='/home'>
        <img 
        className='navbar__logo'
        src='/images/mass.jpg' 
        alt=''></img>
      </Link>
      <nav>
        {isLoggedIn ? (
          <div className='navbar__right'>
            {/* The navbar will show these links after you log in */}
            <p className='navbar__hi'>Hi {user.name}!</p>
            {isAdmin ? <Link to='/admin'><h4 className='navbar__allproducts' >Admin</h4></Link> : <></>}
            <Link to='/products' className='navbar__allproducts'>All Products</Link>
            <div className='navbar__cart'>
              <Link to='/cart' className='navbar__cartIcon'>
              <ShoppingCartIcon />
              </Link>
            </div>
            {/* Dropdown menu */}
            <div className='navbar__dropdown'>
              <button className='navbar__dropdownButton'><MenuIcon/></button>
              <div className='navbar__dropdownContent'>
                <Link to="/userProfile">User Profile</Link>
                <button type="button" onClick={logoutAndRedirectHome}>
                     Logout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className='navbar__right'>
            {/* The navbar will show these links after you log in */}
            <p className='navbar__hi'>Hello Guest!</p>
            <Link to='/products' className='navbar__allproducts'>All Products</Link>
            <div className='navbar__cart'>
              {/*cart component*/}
              <Link to='/cart'  className='navbar__cartIcon'>
              <ShoppingCartIcon />
              </Link>
            </div>
            {/* Dropdown menu */}
            <div className='navbar__dropdown'>
              <button className='navbar__dropdownButton'><MenuIcon/></button>
              <div className='navbar__dropdownContent'>
                <Link to="/login">Login</Link>
                <Link to='/register'>New User</Link>
              </div>
            </div>
          </div>
          // <div className='navbar__right'>
          //   {/* The navbar will show these links before you log in */}
          //   <Link to='/products' className='navbar__allproducts'>All Products</Link>
          //   <div className='navbar__cart'>
          //     {/*cart component*/}
          //     <Link to='/cart'><ShoppingCartIcon/></Link>
          //   </div>
          //   <div className='navbar__dropdown'>
          //     <button className='navbar__dropdownButton'><MenuIcon/></button>
          //     <div className='navbar__dropdownContent'>
          //       {/* <Link to={`/userprofile/${user.id}`}>Profile</Link> */}
          //       <Link to="/login">Login</Link>
          //       <Link to='/register'>New User</Link>
          //       {/* <Link to="/signup">Sign Up</Link> */}
          //     </div>
          //   </div>
          // </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
