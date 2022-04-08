import {useSelector} from 'react-redux'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

export const Minicart=()=>{

    const { cartItems } = useSelector((state) => state.cart);
    return(
        <>
        <div className='minicart'>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'30vw'}}>
            <ShoppingCartOutlinedIcon  style={{opacity:'0.5'}}/>
{cartItems&&cartItems?.reduce((a,c)=>a+c.quantity,0)} Items
<li style={{color:'rgb(0, 192, 139)'}}>₹{cartItems&&cartItems?.reduce((a,c)=>a + c.price * c.quantity,0)}</li>
</div>
<div>
    <button className='cartbtn'>View Cart</button>
    </div>
    </div>
        </>
    )
}

export default Minicart   