import { useState } from "react";
import { LOGO_URL } from "../utils/constants"

const Header = () =>{
    // javaScript variable
    // const btnName = "Login";
    let btnName = "Login";


    // react useState 
    // why constant variable change in react instead of javascript
    const [btnNameReact,setBtnNameReact] = useState('Login');
    console.log("Header Component")


    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    {/* Javascript functional button but not update dynamically */}
                    <button className="login" onClick={()=>{
                        btnName="LogOut";
                        console.log(btnName)
                        }}>{btnName}</button>
                    {/* React usState functional button its change UI  */}
                    {/* <button className="login" onClick={()=>{
                        setBtnNameReact("LogOut")
                        
                        }}>{btnNameReact}</button> */}

                        
                        <button className="login" onClick={()=>{
                            btnNameReact === "Login" ? setBtnNameReact("LogOut") : setBtnNameReact("Login")
                        
                        }}>{btnNameReact}</button>

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