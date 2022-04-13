import './cart.css'
import {useNavigate} from 'react-router-dom'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { useState,useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import CartItem from './cartitem' 

export const Cart=()=>{
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const address=localStorage.getItem("storeinfo")
    const { cartItems } = useSelector((state) => state.cart);
    const adress=localStorage.getItem("adress")
    ? JSON.parse(localStorage.getItem("adress")):false
const[user,setUser]=useState()
const storeinfo=localStorage.getItem("storeinfo")
? JSON.parse(localStorage.getItem("storeinfo")):false
const total=cartItems.reduce((b,c)=>c.quantity*c.price+b,0)
    return(
<>
<div className='cart'>
    <div>
<div style={{display:'flex',alignItems:'center',padding:'1vmax',justifyContent:'space-between',}}>     
  <div style={{display:'flex',alignItems:'center'}}>
        <KeyboardBackspaceIcon/>
      <h5 style={{marginLeft:'1vw'}}>Confirm Order</h5>
        </div>
    <div >
{user?<button className='profile'><h5>Profile</h5></button>:<button className='login'>Login</button>}
    </div>
    </div>
<div className='storein'>
    <h5>
        {storeinfo.title}
    </h5>
    <button className='addmore'>+ Add More</button>
</div>
    <div className='cartitems'>
    {cartItems.map((c)=><CartItem c={c}/>)}
    </div>
<div className='f'></div>
</div>
<div>
{address?
    <div className='addadr'>
<button className='paybtn' onClick={()=>navigate('/addadress')}>add address</button>
    </div>:
<button className='paybtn'>Pay ₹{total}</button>}
</div>
</div>
</>
    )
}

export default Cart