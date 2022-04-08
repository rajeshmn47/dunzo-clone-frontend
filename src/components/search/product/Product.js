import {useDispatch,useSelector} from 'react-redux'
import { useState,useEffect } from 'react';
import { addItemsToCart } from '../../../actions/cartAction';

export const Product=(propss)=>{
    const { cartItems } = useSelector((state) => state.cart);
    console.log(cartItems)
    const item=cartItems.find((c)=>c.product===propss.propss._id)
    const dispatch = useDispatch();
    const[qty,setqty]=useState(0)
    console.log(propss)
    const p=propss.propss
const handleAdd=(id)=>{
    setqty(qty + 1);
    dispatch(addItemsToCart(id,qty));
}
      const handleInc = (id) => {
        setqty(qty + 1);
        dispatch(addItemsToCart(id,  item.quantity+1));
      };
    
      const handleDec = (id) => {
        setqty(qty - 1);
        dispatch(addItemsToCart(id,item.quantity-1));
      };
    return(
        <>
            <div className='product'>
        <div className='left'>
            <div>
        <img src={p.image} alt='' width='60'/>
        </div>
        <div className='productdetails'>
    <h5>{p.name}</h5>
    <h6>{p.price} Rs</h6>
    <h5>{p.quantity} Kg</h5>
    </div>
    </div>
    {!item?
    <div>
        <button className='add' onClick={()=>handleAdd(p._id)}> + ADD</button>
        </div>:<div className='added'>
        <button className='smalladd' onClick={()=>handleInc(p._id)}> + </button>
        {item.quantity}
        <button className='smalladd' onClick={()=>handleDec(p._id)}> - </button>
    </div>}
    </div>
        </>
    )
}

export default Product