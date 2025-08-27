import { useState } from "react";

const User = (props) =>{
    const [count,setCount] = useState(0);
    const [count2] =useState(1);
    return(
        <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
            <h1>Count-{count}</h1>
            <button>Count Increase</button>
            <h1>Count-{count2}</h1>
            <h1>Name : {props.name}</h1>
            <h2>Location : Hyderabad</h2>
            <h1>Contact : ramesh@gmail.com</h1>
        </div>
    );
};

export default User

