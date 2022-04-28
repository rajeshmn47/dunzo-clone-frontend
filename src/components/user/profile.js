import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import {auth} from '../../firebase'

export const Profile=()=>{
    return(
        <>
        <div style={{display:'flex',alignItems:'center',padding:'1vw'}}>
        <KeyboardBackspaceIcon/>
        <img src='https://resources.dunzo.com/web-assets/prod/_next/static/images/logo-7b2b540792556466133aea6e7c6ae513.png' 
        alt='' height='14' width='61'/>
        </div>
        </>
    )
}

export default Profile