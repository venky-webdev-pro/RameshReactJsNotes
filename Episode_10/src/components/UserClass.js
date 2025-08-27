import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props);
        // console.log(props);

        // this.state={
        //     count:0,
        //     count2:2,
        // };

         this.state={
            userInfo:{
                name:'Dummy',
                location:"Default",
                avatar_url:"http://dummy-photo.jpg"
            }
        };

        console.log(this.props.name+"Child Constructor");
    }

    // componentDidMount(){
    //     console.log(this.props.name+"Child Component Didmount");
    // }

    // API CALL IN CLASS BASE COMPONENT
     async componentDidMount(){
        const data = await fetch("https://api.github.com/users/ramesh12331");
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo:json,
        })
    }

    componentDidUpdate(){
        console.log("Component Did Update");
    }

    componentWillUnmount(){
        console.log("Component Will Unmount")
    }

    render () {
        // const {name} = this.state.userInfo;
        // De-Structure
        // const {name}=this.props;
        console.log(this.props.name+"Child render");

        // debugger;
        return(
        <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
            <h1>Count: {this.state.count}</h1>
            <button onClick={()=>{
                this.setState({
                    count:this.state.count+1
                })
            }}>Increase Count</button>
            <h2>Count2: {this.state.count2}</h2>
            {/* <img src={this.state.userInfo.avatar_url} /> */}
            <h1>Name : {this.state.userInfo.name}</h1>
            <h2>Location : {this.state.userInfo.location}</h2>
            <h1>Contact : ramesh@gmail.com</h1>
        </div>
        )
    }
}

export default UserClass;



/**
 * 
 * 
 * ----MOUNTING----
 * 
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML Dummy >
 * Component Did Mount
 * <API Call>
 * <this.setState> State variable is updated
 * 
 * -----UPDATE-----
 *      render (APi data)
 *      <HTML (new API data>)
 *      componentDid Update

 */