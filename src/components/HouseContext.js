import React, { useState, createContext } from "react";

import { housesData } from "../data";

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);

  const [country, setCountry] = useState("Location (any)");
  const [countries, setCountries] = useState([]);

  const [property, setProperty] = useState("Property type (any)");
  const [properties, setProperties] = useState([]);

  const [price, setPrice] = useState("Price Range (any)");

  const [date, setDate] = useState("Available Date (any)")

  const [loading, setLoading] = useState(false);

  const filterSearch = async () => {
    setLoading(true)
    let filteredList = housesData
    //first filtering out the location
    if(!isDefault(country)) {
      filteredList = filteredList.filter((house) => {
        return house.country === country
      })
    }

    if(!isDefault(property)) {
      filteredList = filteredList.filter((house) => {
        return house.type === property
      })
    }

    if(!isDefault(price)) {
      const minPrice = parseInt(price.split(' ')[0])
      const maxPrice = parseInt(price.split(' ')[2])
      console.log(maxPrice, minPrice)

      filteredList = filteredList.filter((house) => {
        const housePrice = parseInt(house.price)
        return (
          housePrice >= minPrice && housePrice <= maxPrice
        )
      })
    }

    if(!isDefault(date)) {
      filteredList = filteredList.filter((house) => {
        return house.date > date
      })
    }

    console.log(filteredList)
    
    setTimeout(() => {
      return filteredList.length < 1 ? 
        
        (
        setHouses([]),
        setLoading(false)
        )

        : 
        
        (
          setHouses(filteredList),
          setLoading(false)
        )

    }, 500)
  }

  const isDefault = (str) => {
    return str.split(' ').includes('(any)')
  }

  const handleClick = async () => {
    console.log(country, property, price, date)
    await filterSearch()
  }

  return (
    <HouseContext.Provider
      value={
       {setLoading,
        loading,
        setPrice,
        price,
        setProperties,
        properties,
        setProperty,
        property,
        setCountries,
        countries,
        setCountry,
        country, 
        houses, 
        setHouses,
        date,
        setDate,
        handleClick}
      }
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
