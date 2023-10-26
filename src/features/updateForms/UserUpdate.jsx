import React, { useEffect,useState } from "react";
import { useDispatch } from 'react-redux';
import { editUser, deleteUser } from '../userProfile/userProfileSlice';
import { fetchUsers } from "../adminView/adminViewSlice";

const UserUpdate = (props) => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            username: userName,
            name: name,
            email:email,
            password: password,
            address: address,
            id: props.user.id,
        };
        console.log(props.whoAsked)
        try {
            dispatch(editUser(newUser));
            setName(newUser.name);
            setUserName(newUser.username);
            setEmail(newUser.email)
            setPassword(newUser.password);
            setAddress(newUser.address);
            if (props.whoAsked) {
                dispatch(fetchUsers())
            }
        } catch (err) {
            console.log(err);
        }
       
    };

    function handleClick(id) {
        dispatch(deleteUser(id));
    }
    
    useEffect(() => {
        if (props.whoAsked) {
            dispatch(fetchUsers())
        }
    }, [dispatch]);
   
    return (
        <form onSubmit={handleSubmit} className="updateForm">
                <div className="contElement">
                    <label htmlFor="username">
                        User Name: {props.user.username}
                    </label>
                    <input
                        type="text"
                        name="username"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <div className="contElement">
                    <label htmlFor="name">Name: {props.user.name}</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="contElement">
                    <label htmlFor="email">Email: {props.user.email}</label>
                    <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="contElement">
                    <label htmlFor="password">Password: </label>
                    <input
                        type="text"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="contElement">
                    <label htmlFor="address">
                        Address: {props.user.address}
                    </label>
                    <input
                        type="text"
                        name="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <button type="submit">Update</button>
                <button onClick={props.delete ?() => props.delete(props.user.id) :() => handleClick(props.user.id)}>Delete</button>
            </form>
    )
}

export default UserUpdate