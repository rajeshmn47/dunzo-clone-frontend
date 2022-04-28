import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import {auth} from '../../firebase'
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

export const Profile=()=>{
    return(
        <>
        <div style={{display:'flex',alignItems:'center',padding:'1vw',boxShadow:'rgb(0 0 0 / 6%) 0px 4px 7px'}}>
        <KeyboardBackspaceIcon/>
        <img src='https://resources.dunzo.com/web-assets/prod/_next/static/images/logo-7b2b540792556466133aea6e7c6ae513.png' 
        alt='' height='14' width='61'/>
        </div>
        <div style={{padding:'1vh 1vw',margin:'1vh 1vw',display:'flex',justifyContent:'spaceBetween',alignItems:'center'}}>
    <button onClick={()=>auth.signOut()} className='logoutbtn'>
     <ExitToAppOutlinedIcon/>   
        Logout</button>
<ChevronRightOutlinedIcon/>
    </div>
        </>
    )
}

export default Profile