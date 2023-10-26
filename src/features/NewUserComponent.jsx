import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authenticate } from "./auth/authSlice";
import { useNavigate } from "react-router-dom";

export const NewUserForm = () => {
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')
    const [address, setAddress] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const formHandler = (e) => {
        e.preventDefault()
        if(password === confirmpassword) {
            dispatch(authenticate({method:'signup', username,name,email,password,address}))
            navigate('/home')
        } else {
            return window.alert('Password must match')
        }
    }

    return (
        <div className='new-user-form'>
            <form onSubmit={formHandler}>
                <label>Username:</label>
                <input type='text' onChange={(e) => {setUsername(e.target.value)}}/>
                <label>Name:</label>
                <input type='text' onChange={(e) => {setName(e.target.value)}}/>
                <label>Email:</label>
                <input type='text'onChange={(e) => {setEmail(e.target.value)}}/>
                <label>Password:</label>
                <input type='password' onChange={(e) => {setPassword(e.target.value)}}/>
                <label>Confirm Password:</label>
                <input type='password' onChange={(e) => {setConfirmPassword(e.target.value)}}/>
                <label>Address:</label>
                <input type='text' onChange={(e) => {setAddress(e.target.value)}}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
