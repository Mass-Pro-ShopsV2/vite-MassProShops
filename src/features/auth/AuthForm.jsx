import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authenticate } from '../../app/store';
import { useNavigate } from 'react-router-dom';

/**
  The AuthForm component can be used for Login or Sign Up.
  Props for Login: name="login", displayName="Login"
  Props for Sign up: name="signup", displayName="Sign Up"
**/

const AuthForm = ({ name, displayName }) => {
  const { error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const formName = evt.target.name;
    const username = evt.target.username.value;
    const password = evt.target.password.value;

    const success = await dispatch(authenticate({username,password,method:formName}))
    console.log(success, 'trying to log in')
    if(success.error){
      console.error('login failed')
      console.log('Login failed, Please try again.')
    }else{
      navigate('/home')
    }
  
    
    // dispatch(authenticate({ username, password, method: formName }));
    // navigate('/home')

  };

  return (
    <div className='loginDiv'>
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="username">
            <small>Username</small>
          </label>
          <input name="username" type="text" />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" />
        </div>
        <div>
          <button className='loginButton'  type="submit">{displayName}</button>
        </div>
        <br/>
        {error && <div> {error} </div>}
      </form>
    </div>
  );
};

export default AuthForm;
