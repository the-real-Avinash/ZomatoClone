import React from "react";
import "./diningOut.css";
import Collection from "../common/collection";
import Filters from "../common/filters";
import ExploreSection from "../common/exploreSection";
import { diningOut } from "../../data/diningOut";

const collectionList = [
  {
    id: 1,
    title: "Romantic Dining Place",
    cover:
      "https://b.zmtcdn.com/data/collections/22e92920ef5452cf4d4b9e1f8309da1f_1674839220.jpg",
    places: "9 places",
  },
  {
    id: 2,
    title: "16 Newly Open Restaurants",
    cover:
      "https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg",
    places: "16 places",
  },
  {
    id: 3,
    title: "8 Great Buffets in town",
    cover:
      "https://media-cdn.tripadvisor.com/media/photo-s/12/36/15/5a/international-buffet.jpg",
    places: "8 places",
  },
  {
    id: 4,
    title: "14 Lit Party Places",
    cover: "https://wallpaperaccess.com/full/2249936.jpg",
    places: "14 places",
  },
  {
    id: 5,
    title: "11 Best insta-worthy places",
    cover:
      "https://res.cloudinary.com/purnesh/image/upload/f_auto/v1599724628/81599724627309.jpg",
    places: "1 places",
  },
  {
    id: 6,
    title: "12 Best Bars and Pubs",
    cover:
      "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    places: "12 places",
  },
  {
    id: 7,
    title: "11 Best Places Serving Best Cuisines",
    cover:
      "https://www.shutterstock.com/image-photo/arabic-cuisine-middle-eastern-traditional-260nw-1690553083.jpg",
    places: "11 places",
  },
  {
    id: 8,
    title: "10 Best Places Amazing Sea Foods",
    cover:
      "https://media.istockphoto.com/id/1305699663/photo/seafood-platter-grilled-lobster-shrimps-scallops-langoustines-octopus-squid-on-white-plate.jpg?s=612x612&w=0&k=20&c=iEwdxon7CJ0wQEDy8-kwnz7TLdknVw05vaa-Qc_aHow=",
    places: "10 places",
  },
];

const diningFilter = [
  {
    id: 1,
    icon: <i class="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Outdoor Siting",
  },
  {
    id: 4,
    title: "Serves Alcohol",
  },
  {
    id: 6,
    title: "Open Now",
  },
];

const diningList = diningOut;

const DiningOut = () => {
  return (
    <div>
      <Collection list={collectionList} />
      <div className="max-width">
        <Filters filterList={diningFilter} />
      </div>
      <ExploreSection
        list={diningList}
        collectionName="Dine out Restaurant in Pune"
      />
    </div>
  );
};

export default DiningOut;
