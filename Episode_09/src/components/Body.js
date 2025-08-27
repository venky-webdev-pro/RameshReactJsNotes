
import { useEffect, useState } from "react"
import RestarentCard from "./RestarentCard"
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";



const Body = () =>{
   

const [listofRestaurants,setListofRestaurants] = useState([]);
const [filteredRestants,setFilteredRestants] = useState([])
const [searchText,setSearchText] = useState("")

// Whenever state variable update , react triggers a reconcilation cycle(re-renders the component)
console.log("Body render")

useEffect(()=>{
    fetchData()
},[])

const fetchData = async () =>{
    const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=17.4447068&lng=78.4663812&carousel=true&third_party_vendor=1");
    const json = await data.json();
    console.log(json.data)
    // console.log(json.data.cards[1]);
    setListofRestaurants(json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestants(json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}

// const fetchData = async () => {
//   try {
//     const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=17.4447068&lng=78.4663812&carousel=true&third_party_vendor=1");

//     if (!data.ok) {
//       throw new Error(`HTTP error! Status: ${data.status}`);
//     }

//     const text = await data.text();
//     // console.log("Raw response:", text);

//     try {
//       const json = JSON.parse(text);
//       console.log(json.data);
//       setListofRestaurants(json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
//     } catch (err) {
//       console.error("Not valid JSON:", err.message);
//     }

//   } catch (error) {
//     console.error("Fetch failed:", error);
//   }
// };




// if(listofRestaurants.length === 0){
//     // return <h1>Loading.....!</h1>
//     return <Shimmer/>;
// }

const onlinestatus = useOnlineStatus();

if(onlinestatus === false) return <h1>You are in offline !! check your internet connection</h1>

    return listofRestaurants.length === 0 ? <Shimmer/> :(
        <div className="body">
            <div className="filter">
              <div className="search">
                <input type="text" className="search-box" onChange={(e)=>{setSearchText(e.target.value)}} value={searchText}/>
                <button
                onClick={
                  ()=>{
                    // Filter the restaurant cards and update the UI
                    //I need search text in inputbox
                    console.log(searchText);
                    // const filteredRestaurant = listofRestaurants.filter((res)=>res.info.name.includes(searchText));
                    const filteredRestaurant = listofRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    // setListofRestaurants(filteredRestaurant); 
                    setFilteredRestants(filteredRestaurant)
                  }
                }
                >Search</button>
              </div>
                <button className="filter-btn" onClick={()=>{
                    const filteredList = listofRestaurants.filter(
                        (res)=>res.info.avgRating>4.3
                    );
                    setListofRestaurants(filteredList)
                    
                    }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                
                
                {filteredRestants.map((restaurant) => (
                    <RestarentCard key={restaurant.info.id} resData={restaurant} />
                ))}
               
            </div>
            
        </div>
    )
}

export default Body