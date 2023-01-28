import React from "react";
import "./topBrands.css";
import NextArrow from "../../common/Carousel/NextArrow";
import PrevArrow from "../../common/Carousel/PrevArrow";
import Slider from "react-slick";
const brandList = [
  {
    id: 1,
    title: "McDonald's",
    time: "35 min",
    cover:
      "https://blog.logomyway.com/wp-content/uploads/2017/01/mcdonalds-logo-1.jpg",
  },
  {
    id: 2,
    title: "Domino's Pizza",
    time: "30 min",
    cover:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Domino%27s_pizza_logo.svg/800px-Domino%27s_pizza_logo.svg.png",
  },
  {
    id: 3,
    title: "Burger King",
    time: "32 min",
    cover:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Burger_King_logo_%281999%29.svg/2024px-Burger_King_logo_%281999%29.svg.png",
  },
  {
    id: 4,
    title: "Pizza Hut",
    time: "23 min",
    cover:
      "https://upload.wikimedia.org/wikipedia/sco/thumb/d/d2/Pizza_Hut_logo.svg/2177px-Pizza_Hut_logo.svg.png",
  },
  {
    id: 5,
    title: "Rolls Mania",
    time: "27 min",
    cover:
      "https://i.pinimg.com/280x280_RS/66/e1/8c/66e18cfc92b491dd7da5517e3580597a.jpg",
  },
  {
    id: 6,
    title: "KFC",
    time: "32 min",
    cover: "https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo.png",
  },
  {
    id: 7,
    title: "The Irani Cafe",
    time: "24 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/05a2c24a8de3f8fe07fc46a07fdbba99_1611576819.png?output-format=webp",
  },
  {
    id: 8,
    title: "Subway",
    time: "22 min",
    cover:
      "https://www.logodesignlove.com/images/monograms/subway-monogram-01.jpg",
  },
  {
    id: 9,
    title: "Faasos - Wraps & Rolls",
    time: "18 min",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiBEkxpky82vhqW9htaBEs4amZt-KV-Ak0DognznjBPQ-d2ygRNb2owlbZEYJ0zyPJNak&usqp=CAU",
  },
];

const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const TopBrands = () => {
  return (
    <div className="top-brands max-width">
      <div className="collection-title">Top Brands for you</div>
      <Slider {...settings}>
        {brandList.map((brand) => {
          return (
            <div>
              <div className="top-brands-cover">
                <img
                  src={brand.cover}
                  alt={brand.title}
                  className="top-brands-image"
                />
              </div>
              <div className="top-brand-title">{brand.title}</div>
              <div className="top-brand-time">{brand.time}</div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default TopBrands;
