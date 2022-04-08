import {useSelector} from 'react-redux'

export const Minicart=()=>{

    const { cartItems } = useSelector((state) => state.cart);
    return(
        <>
{cartItems?.reduce((a,c)=>a+c.quantity+0)} Items
{cartItems?.reduce((a,c)=>a+c.price*c.quantity+0)}
        </>
    )
}

export default Minicart   