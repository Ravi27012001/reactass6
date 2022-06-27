import './add.css'
import {Link} from 'react-router-dom'
const Navigation=()=>{
    
    return(<div>
        
           
         

        <div style={{ display: "flex",justifyContent:"space-between",backgroundColor:'rgb(105, 172, 0)',fontSize:"50px",fontFamily:"Brush Script MT, Brush Script Std, cursive	"}}>
     <Link to='/home'>Home</Link>
     <Link to='/student'>Student</Link>
     <Link to='/contact'>Contact-us </Link>


        </div>
        </div>
        
    )
}
export default Navigation;