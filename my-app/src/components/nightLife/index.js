import React from "react";
import "./nightLife.css";
import Collection from "../common/collection";
import Filters from "../common/filters";
import ExploreSection from "../common/exploreSection";
import { nightLife } from "../../data/nightLife";

const nightLifeList = [
  {
    id: 1,
    title: "14 Lit Party Places",
    cover: "https://wallpaperaccess.com/full/2249936.jpg",
    places: "14 places",
  },

  {
    id: 2,
    title: "12 Best Bars and Pubs",
    cover:
      "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    places: "12 places",
  },
  {
    id: 3,
    title: "11 Best Places Serving Best Cuisines",
    cover:
      "https://www.shutterstock.com/image-photo/arabic-cuisine-middle-eastern-traditional-260nw-1690553083.jpg",
    places: "11 places",
  },
  {
    id: 4,
    title: "10 Best Places Amazing Sea Foods",
    cover:
      "https://media.istockphoto.com/id/1305699663/photo/seafood-platter-grilled-lobster-shrimps-scallops-langoustines-octopus-squid-on-white-plate.jpg?s=612x612&w=0&k=20&c=iEwdxon7CJ0wQEDy8-kwnz7TLdknVw05vaa-Qc_aHow=",
    places: "10 places",
  },
];

const nightFilters = [
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
    icon: <i class="fi fi-sr-exchange"></i>,
    title: "Distance",
  },
  {
    id: 4,
    title: "Pubs and Bars",
  },
];

const nightList = nightLife;
const NightLife = () => {
  return (
    <div>
      <Collection list={nightLifeList} />
      <div className="max-width">
        <Filters filterList={nightFilters} />
      </div>
      <ExploreSection
        list={nightList}
        collectionName="NightLife restaurant in Pune"
      />
    </div>
  );
};

export default NightLife;
