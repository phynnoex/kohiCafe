import coffeeSmall from "../../assets/coffee-small.png";
import coffeeMid from "../../assets/coffee-medium.png";
import coffeeLg from "../../assets/coffee-large.png";
import "./styles.scss";
import { FaWeight } from "react-icons/fa";
import { useState } from "react";

type SizesProps = {
  size: String;
  weight: string;
  image: string;
  isActive: boolean;
};

type SizeDisplayProps = {
    onSelect: (number:number)=>void;
    selectedIndex: number|null;
}

export default function SizeDisplay({selectedIndex, onSelect}: SizeDisplayProps) {
  const sizes: SizesProps[] = [
    {
      size: "small",
      weight: "12 fl oz",
      image: coffeeSmall,
      isActive: false,
    },
    {
      size: "Medium",
      weight: "12 fl oz",
      image: coffeeMid,
      isActive: false,
    },
    {
      size: "Large",
      weight: "12 fl oz",
      image: coffeeLg,
      isActive: false,
    },
    {
      size: "Ext Large",
      weight: "12 fl oz",
      image: coffeeSmall,
      isActive: false,
    },
  ];




  return (
    <div className="sizeDisplay">
      {sizes.map((size, index) => {
        const isActive = index === selectedIndex;
        return (
          <div key={index}
            className={`sizeDisplay__size-container `}
            onClick={() => {
              onSelect(index)
            }}
          >
            <div
              className={` sizeDisplay__image-container ${
                !isActive ? "" : "sizeDisplay__image-container--active"
              }`}
            >
              <img src={size.image} alt="" className="sizeDisplay__image" />
            </div>
            <div className="sizeDisplay__description">
              <h4>{size.size}</h4>
              <p>{size.weight}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
