import { CDN_URL } from "../utils/constants";


const RestarentCard = (props) =>{
    const styleCard = {
    backgroundColor:"#f0f0f0"
}
    // console.log(props)
    const {resData} = props;
    // Extract restaurant info
    const { name, cuisines, avgRating, cloudinaryImageId, sla } = resData?.info;
    return(
        <div className="res-card m-4 p-4 w-[200px] rounded" style={styleCard}>
            <img width={200} className="rounded-xl" src={ CDN_URL+cloudinaryImageId}/>
            <h3 className="font-bold">{name}</h3>
            <h4 className="text-xs">{cuisines?.join(", ") || "Not available"}</h4>
            <div className="flex space-x-2 text-sm text-gray-700 mt-1">
                <span className="font-bold">⭐ {avgRating || "--"}</span> <br/>
                <span>{sla?.slaString || "N/A"}</span>
            </div>
        </div>
    )
}

export default RestarentCard;