import React, { useEffect,useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteProduct, editProduct } from './editProductSlice';
import { fetchUsers, fetchProducts } from "../adminView/adminViewSlice";

export default function ProductUpdate({product}) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [description, setDescription] = useState('')
    
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newInfo = {
            name:name,
            price:price,
            quantity:quantity,
            description:description,
            id:product.id
        }
        console.log(product.id)
        try{
            dispatch(editProduct(newInfo))
            dispatch(fetchProducts())
            setName('')
            setPrice('')
            setQuantity('')
            setDescription('')
        }catch(err){
            console.log('editForm handleSubmit error:',err)
        }
    }

    const handleDelete =  () => {
        dispatch(deleteProduct(product.id))
    }

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
  return (
    <form onSubmit={handleSubmit} className="updateForm">
        <div className="contElement">
            <label>Name:</label>
            <input type='text' value={name} onChange={e =>setName(e.target.value)}></input>
        </div>
        <div className="contElement">
            <label>Price:</label>
            <input type='number' value={price} onChange={e =>setPrice(e.target.value)}></input>
        </div>
        <div className="contElement">
            <label>Quantity:</label>
            <input type='number' value={quantity} onChange={e => setQuantity(e.target.value)}></input>
        </div>
        <div className="contElement">
            <label>Description:</label>
            <input type='text' value={description} onChange={e => setDescription(e.target.value)}></input>
        </div>
        <button type='submit'>Submit</button>
        <button onClick={() => handleDelete()}>Delete</button>
    </form>
  )
}

