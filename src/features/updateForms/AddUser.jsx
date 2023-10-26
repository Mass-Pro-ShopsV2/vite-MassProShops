import React, { useEffect,useState } from "react";
import { useDispatch } from 'react-redux';
import { fetchUsers} from "../adminView/adminViewSlice";
import { addUser } from "../userProfile/userProfileSlice";

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
            address: address
        };

        try {
            dispatch(addUser(newUser));
            setName(newUser.name);
            setUserName(newUser.username);
            setEmail(newUser.email)
            setPassword(newUser.password);
            setAddress(newUser.address);
            dispatch(fetchUsers())
        } catch (err) {
            console.log(err);
        }
       
    };

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <form onSubmit={handleSubmit} className="updateForm">
                <div className="contElement">
                <label htmlFor="username">User Name:</label>
                    <input
                        type="text"
                        name="username"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <div className="contElement">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="contElement">
                    <label htmlFor="email">Email:</label>
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
                    <label htmlFor="address">Address:</label>
                    <input
                        type="text"
                        name="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <button type="submit">Add</button>
            </form>
    )
}

export default UserUpdate