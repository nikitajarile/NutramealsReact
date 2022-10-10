import { IconButton, InputAdornment, Link, TextField } from "@material-ui/core";
import Button from "@mui/material/Button";
import "./styles/HomePageBody.css";
import SearchIcon from "@material-ui/icons/Search";
import React, { useState } from "react";

function HomePageBody(props) {
  const [restaurantname, setrestaurantName] = useState("");
  //   state = {
  //     restaurantDetails: {
  //       restaurantName: "",
  //     },
  //   };

  const changeHandlerRestaurantName = (event) => {
    event.persist();
    setrestaurantName(event.target.value);
    // this.setState((prevState) => ({
    //   restaurantDetails: {
    //     ...prevState.restaurantDetails,
    //     restaurantName: event.target.value,
    //   },
    // }));
  };
  return (
    <div className="HomePageBody">
      <div>
        <h1>NutraMeals</h1>
      </div>
      <div>
        <h2>Your Healthy Food Delivery Partner</h2>
      </div>
      <div className="textfield-div">
        <TextField
          className="textfield"
          onChange={(value) => this.changeHandlerRestaurantName(value)}
          id="mySearch"
          variant="outlined"
          size="small"
          placeholder="Search for restaurant"
          title="Type in a category"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  component={Link}
                  to={{
                    pathname: "/searchRestaurant",

                    // state: {
                    //   restaurantDetails: {
                    //     restaurantName:
                    //       this.state.restaurantDetails.restaurantName,
                    //   },
                    // },
                  }}
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        ></TextField>
      </div>
      <div className="button-div">
        <Button
          className="button"
          variant="contained"
          sx={{
            borderRadius: 50,
            backgroundColor: "#21b6ae",
            color: "black",
            textAlign: "center",
            fontSize: 13,
          }}
          to={{
            pathname: "/listRestaurants",
          }}
        >
          List All Restaurants
        </Button>
      </div>
    </div>
  );
}
export default HomePageBody;
