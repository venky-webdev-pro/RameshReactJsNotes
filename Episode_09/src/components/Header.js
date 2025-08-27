import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () =>{
    


    // react useState 
    // why constant variable change in react instead of javascript
    const [btnNameReact,setBtnNameReact] = useState('Login');
    
    const onlineStatus = useOnlineStatus()
    console.log("Header Component")

    // if no dependency array ==> useEffect is called on every render;
    // if dependency array is empty = [] ==>useEffect is called on initial render (just once);
    //if dependency array is [btnNameReact] => called everytime btnNameReact is updated
    useEffect(()=>{
        console.log("useEffect called")
    },[btnNameReact])


    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status : {onlineStatus ? "✅":"🔴"}</li>
                    <li>Home</li>
                    {/* When anchor tag used, it relode total page */}
                    <li><a href="/about">About Us</a></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                        {/* Advance */}

                        <button
                        className="login"
                        onClick={() => {
                        setBtnNameReact(btnNameReact === "Login" ? "LogOut" : "Login");
                        }}
                        >
                        {btnNameReact}
                        </button>
                </ul>
            </div>
        </div>
    )
}

export default Header