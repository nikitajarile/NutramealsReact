import { useLocation } from "react-router-dom";
import { restrauntNames } from "./RestaurantDetails";
import "./RestrauntList.css";

function SearchFoodItem(props) {
  
    const location = useLocation();
    const restaurant = location.state;
    var image = "";
    var rating = "";
    for (const restrauntName of restrauntNames){ 
        if(restrauntName.name === restaurant.restaurantName){
            image = restrauntName.image;
            rating = restrauntName.rating;
        }
    }
    return (
    <div className="container">
      <div className="fgrid-container">
        <div className="item-container">
            <img className="rimage" alt="img" src={image}></img>
            <h6>Rating: {rating + "/ 5"}</h6>
            <h6>
                {restaurant.addressLine1}, {restaurant.addressLine2}, {restaurant.state},{" "}
                {restaurant.zipCode}
            </h6>
            <h6>{restaurant.phone}</h6>
              <h6>{restaurant.email}</h6>
              <br></br>
            <div className="fitem-container">
            <img className="fimage" alt="img" src="https://eatplant-based.com/wp-content/uploads/2014/12/Veggie-Wraps.jpg"></img>
            <div className="foodItem">
              <h5>{restaurant.foodItemName}</h5>
              <h5>${restaurant.foodItemCost} </h5>
              <h5>{restaurant.foodType}</h5>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
export default SearchFoodItem;