import LocationOnIcon from '@material-ui/icons/LocationOn';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useState,useEffect } from 'react';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import {TextField} from '@material-ui/core'
import { Search } from '@material-ui/icons';

export const Topbar=()=>{
    const [user,setUser]=useState()
return(
    <>
    <div className='navbarcontainer'>
    <div className='navbar'>
    <div className='child'>
<LocationOnIcon htmlColor='#00D290'/>Set Location <ExpandMoreOutlinedIcon htmlColor='#00D290'/>
</div>
<div className='child'>
<ShoppingCartOutlinedIcon/>
{user?user.username:'Sign in'}
<MoreVertIcon/>
</div>
</div>
<div className='search'>
<TextField style={{width:'100%',height:'5vh',padding:'1vmax'}} variant='outlined'/>
<Search style={{position:'absolute',top:'55%',right:'5%'}}/>
</div>
</div>
    </>
)
}
export default Topbar