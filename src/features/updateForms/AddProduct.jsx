import React, { useEffect,useState } from 'react'
import { useDispatch } from 'react-redux';
import { addProduct } from './editProductSlice';
import { fetchProducts } from '../adminView/adminViewSlice';

export default function AddProduct() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [description, setDescription] = useState('')
    const [image,setImage] = useState('')
    const [category, setCategory] = useState('laptop')

    const dispatch = useDispatch()
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const newInfo = {
            name:name,
            price:price,
            quantity:quantity,
            description:description,
            image:image,
            category:category
        }

        try{
            await dispatch(addProduct(newInfo))

            setName('')
            setPrice('')
            setQuantity('')
            setDescription('')
            setImage('')
            setCategory('laptop')
            dispatch(fetchProducts())
        }catch(err){
            console.log('addProduct handleSubmit error', err)
        }
    }

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
        <div className="contElement">
            <label>image:</label>
            <input type='text' value={image} onChange={e => setImage(e.target.value)}></input>
        </div>
        <div className="contElement">
            <label>Category:</label>
            <select value='laptop' onChange={e => setCategory(e.target.value)}>
                <option value='laptop' >Laptop</option>
                <option value='desktop' >Desktop</option>
                <option value='projector' >Projector</option>
                <option value='audio' >Audio</option>
            </select>
        </div>
        <button type='submit'>Add</button>
    </form>
  )
}