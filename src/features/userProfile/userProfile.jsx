import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editUser, fetchSingleUser, deleteUser } from './userProfileSlice';
import { useNavigate } from 'react-router-dom';
import { logout } from '../auth/authSlice';
import UserUpdate from '../updateForms/UserUpdate';

const UserProfile = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const currentUser = useSelector((state) => state.auth.me);
    const singleUser = useSelector((state) => {
        return state.singleUser.singleUser;
    });

    function handleClick(id) {
        dispatch(deleteUser(id));
        dispatch(logout());
        navigate('/login');
    }

    useEffect(() => {
        dispatch(fetchSingleUser(currentUser.id));
    }, [dispatch]);

    return (
        <div className="userProfileContainer">
            <h2>User Update Form</h2>
            <UserUpdate user={singleUser} delete={handleClick}/>
        </div>
    );
};

export default UserProfile;
