import LocationOnIcon from '@material-ui/icons/LocationOn';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useState,useEffect } from 'react';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import {TextField} from '@material-ui/core'
import { Search } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';

export const Topbar=()=>{
    const [user,setUser]=useState()
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
<ShoppingCartOutlinedIcon/>
{user?user.username:<h5 onClick={()=>navigate('/signin')}>Sign in</h5>}
<MoreVertIcon/>
</div>
</div>
<div className='search'>
<TextField style={{width:'100%',height:'5vh',padding:'1vmax'}} variant='outlined' 
placeholder='search for item or a store' onClick={()=>navigate('/search')}/>
<Search style={{position:'absolute',top:'50%',right:'10%'}}/>
</div>
</div>
    </>
)
}
export default Topbar