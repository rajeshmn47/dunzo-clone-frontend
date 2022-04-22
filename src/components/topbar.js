import LocationOnIcon from '@material-ui/icons/LocationOn';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useState,useEffect } from 'react';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import {TextField,Badge} from '@material-ui/core'
import { Search } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'


export const Topbar=()=>{
    const { cartItems } = useSelector((state) => state.cart);
    const user = useSelector((state) => state.user);
    console.log(user)
    console.log(cartItems)
    const navigate=useNavigate()
    const data = JSON.parse(localStorage.getItem('Coordinates'));
    console.log(data)
return(
    <>
    <div className='navbarcontainer'>
    <div className='navbar'>
    <div className='child' onClick={()=>navigate('/set-location')}>
<LocationOnIcon htmlColor='#00D290'/>{data?<p>{data.area}</p>:'Set Location' }<ExpandMoreOutlinedIcon htmlColor='#00D290'/>
</div>
<div className='child'>
<Badge badgeContent={cartItems?.reduce((a,b)=>a+b.quantity,0)} color="error" onClick={()=>navigate('/cart')}>
<ShoppingCartOutlinedIcon/>
</Badge>
{user?user.username:<h5 onClick={()=>navigate('/auth')}>Sign in</h5>}
<MoreVertIcon/>
</div>
</div>
<div className='search'>
<TextField style={{width:'100%',height:'5vh',padding:'1vmax'}} variant='outlined' 
placeholder='search for item or a store' onClick={()=>navigate('/search')}/>
<Search style={{position:'absolute',top:'40%',right:'5%'}}/>
</div>
</div>
    </>
)
}
export default Topbar