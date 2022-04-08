import {useSelector} from 'react-redux'

export const Minicart=()=>{

    const { cartItems } = useSelector((state) => state.cart);
    return(
        <>
{cartItems&&cartItems?.reduce((a,c)=>a+c.quantity+0)} Items
₹{cartItems&&cartItems?.reduce((a,c)=>a + c.price * c.quantity,0)}
        </>
    )
}

export default Minicart   