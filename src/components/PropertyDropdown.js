import React, { useContext, useEffect, useState } from "react";
import {
  RiHome5Line,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from "react-icons/ri";

import { Menu } from "@headlessui/react";

import { HouseContext } from "./HouseContext";

const PropertyDropdown = () => {
  const { houses, property, setProperty, properties, setProperties } =
    useContext(HouseContext);

  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type
    })
    const uniqueCountries = ['Location (any)', ...new Set(allProperties)]
    console.log(uniqueCountries)
    setProperties(uniqueCountries)
  }, [])

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="dropdown relative">

      <Menu.Button 
        className="dropdown-btn w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
        >
    
        <RiHome5Line
          className="dropdown-icon-primary" />
        
        <div>
          <div className="text-[15px] font-medium
              leading-tight">
            {property}
          </div>
          <div className="text-[13px]">Select Property Type</div>
          

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
        {properties.map((property, index) => {
          return (
            <Menu.Item as='li' key={index} 
            className='cursor-pointer 
            hover:text-violet-700 transition'
            onClick={() => {
              setProperty(property) 
              setIsOpen(!isOpen)
            }}
            > 
            {property}
            </Menu.Item>
          )
        })}
      </Menu.Items>

    </Menu>
  );
};

export default PropertyDropdown