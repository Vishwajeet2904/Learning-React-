import RestaurantCard from "./Card.js";
import { useState, useEffect } from "react";
import restList from "../utils/mockdata.js";

const Body = () => {
  // state variables
  const [listOfRestaurants, setListOfRestaurants] = useState(restList);
  const [filteredList, setFilteredList] = useState(restList);

  // fetch function
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2505&lng=77.4065&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();

    console.log(json?.data.cards[3]?.card?.card?.info);

    // update states
    setListOfRestaurants(json?.data?.cards[3]?.card?.card?.info);
    setFilteredList(json?.data?.cards[3]?.card?.card?.info);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
return <Shimmer />;
}

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filtered = listOfRestaurants.filter(
              (res) => res.card?.card?.info?.avgRating > 4
            );
            setFilteredList(filtered);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.card?.card?.info?.id}
            resData={restaurant.card?.card}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
