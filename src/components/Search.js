import React, { useContext } from 'react'
import {HouseContext} from "./HouseContext"
import {RiSearch2Line} from "react-icons/ri"
import DateDropdown from "./DateDropdown"

import CountryDropdown from "./CountryDropdown"
import PropertyDropdown from "./PropertyDropdown"
import PriceRangeDropdown from "./PriceRangeDropdown"

const Search = () => {
  const {handleClick} = useContext(HouseContext)
  return <div className='px-[30px] py-6 max-w-[1370px]
  mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4
  lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur'>
    <CountryDropdown />
    <PropertyDropdown />
    <PriceRangeDropdown />
    <DateDropdown />
    <button className='bg-violet-700 
    hover:bg-violet-800 tranition w-full
    lg:max-w-[162px] h-16 rounded-lg 
    flex justify-center items-center text-white text-lg'
    onClick={() => handleClick()}>

      <RiSearch2Line />
    
    </button>
  </div>
};

export default Search;
