import React, { useContext, useEffect, useState } from "react";
import {
  RiMapPinLine,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from "react-icons/ri";

import { Menu } from "@headlessui/react";

import { HouseContext } from "./HouseContext";

const CountryDropdown = () => {
  const { houses, country, setCountry, countries, setCountries } =
    useContext(HouseContext);

  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country
    })
    const uniqueCountries = ['Location (any)', ...new Set(allCountries)]
    console.log(uniqueCountries)
    setCountries(uniqueCountries)
  }, [])

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="dropdown relative">

      <Menu.Button 
        className="dropdown-btn w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
        >
    
        <RiMapPinLine
          className="dropdown-icon-primary" />
        
        <div>
          <div className="text-[15px] font-medium
              leading-tight">
            {country}
          </div>
          <div className="text-[13px]">Select your place</div>
          

        </div>

          {isOpen ? 
                (<RiArrowUpSLine
                  className="dropdown-icon-secondary"
                />) 
                : 
                (<RiArrowDownSLine
                  className="dropdown-icon-secondary"
                />)
          }
      
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {countries.map((country, index) => {
          return (
            <Menu.Item as='li' key={index} 
            className='cursor-pointer 
            hover:text-violet-700 transition'
            onClick={() => {
              setCountry(country) 
              setIsOpen(!isOpen)
            }}
            > 
            {country}
            </Menu.Item>
          )
        })}
      </Menu.Items>

    </Menu>
  );
};

export default CountryDropdown;
