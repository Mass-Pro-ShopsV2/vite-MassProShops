import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, fetchProducts } from "./adminViewSlice";
import UserUpdate from "../updateForms/UserUpdate";
import ProductUpdate from "../updateForms/ProductUpdate";
import AddUser from "../updateForms/AddUser"
import AddProduct from "../updateForms/AddProduct";

const AdminView = (props) => {
    const dispatch = useDispatch();
    const [display, setDisplay] = useState("Users")
    const [selectedForm, setSelectedForm] = useState(null);
    const [expanded, setExpanded] = useState(false)
    const [addForm, setAddForm] = useState(false)

    const users = useSelector((state) => {
        return state.adminView.users;
    });

    const products = useSelector((state) => {
        return state.adminView.products;
    });

    const handleExpand = (id) => {
        setSelectedForm(id)
        setExpanded(!expanded)
    }
    
    const displayContent = () => {
        
        if (display === "Users" && users) {
             return users.map(el => {
                return (
                    <div className="flexColumn">
                        <div className="adminSingleUser">
                            <div>{el.name}</div>
                            <div>{el.username}</div>
                            <div>{el.address}</div>
                            <div>{el.email}</div>
                            <button className='editButton' onClick={() => handleExpand(el.id)}>Edit</button>
                        </div>
                        {expanded ? selectedForm === el.id && <UserUpdate user={el} whoAsked="admin"/>: <></> }
                    </div>
                )
            })
        }

        if (display === "Products" && products) {
            return products.map(el => {
               return (
                    <div className="flexColumn">
                        <div className="adminSingleUser">
                            <div>{el.name}</div>
                            <div>{el.price}</div>
                            <div>{el.description}</div>
                            <div>{el.quantity}</div>
                            <button className='editButton' onClick={() => handleExpand(el.id)}>Edit</button>
                        </div>
                        {expanded ? selectedForm === el.id && <ProductUpdate product={el}/>: <></> }
                    </div>
               )
           })
       }
    }

    const handleClick = (whatToShow) => {
        dispatch(fetchUsers());
        setDisplay(whatToShow)
        
    }

    const addUserForm = (whatToShow) => {
        whatToShow === addForm ? setAddForm(false):setAddForm(whatToShow)
        
    }
    
    useEffect(() => {
        dispatch(fetchUsers());
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div className="categoriesAndContentContainer">
            <div className="categories">
                <button onClick={()=>handleClick("Products")}>Products</button>
                <button onClick={()=>handleClick("Users")}>Users</button>
            </div>
            <div className="mainContent">
                <h3>{display}</h3>
                {display === "Users" ? 
                    <div className="adminSingleUser">
                        <div>Name</div>
                        <div>Username</div>
                        <div>Address</div>
                        <div>Email</div>
                        <button onClick={() => addUserForm("User")}>Add {display}</button>
                    </div>:
                    <div className="adminSingleUser">
                        <div>Name</div>
                        <div>price</div>
                        <div>description</div>
                        <div>Quantity</div>
                        <button onClick={() => addUserForm("Product")}>Add {display}</button>
                    </div>
                    }
                {addForm === "User"? <AddUser /> : <></>}
                {addForm === "Product"? <AddProduct /> : <></>}
                {displayContent()}
            </div>
        </div>
    )
}

export default AdminView;