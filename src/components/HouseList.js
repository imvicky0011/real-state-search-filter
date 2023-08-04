import React, { useContext } from 'react';
import {HouseContext} from './HouseContext'
import House from './House'
import {Link} from 'react-router-dom'
import {ImSpinner2} from 'react-icons/im'


const HouseList = () => {
  const {houses, loading} = useContext(HouseContext)
  console.log(houses)
  
  //when th search is going on, or the loading state is true
  if(loading) {
    return <ImSpinner2 
    className='mx-auto animate-spin text-violet-700
    text-4xl mt-[200px]' />
  }


  //when the loading is done, or search is done then the loading state
  //turns back to the false
  //now, we reder the list

  if(houses.length < 1) {
    return <div
    className='text-center text-3xl text-gray-400 mt-48'>
    Sorry, could not find any property!</div>
  }

  return (
    <section className='mb-20'>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
          {houses.map((house, index) => {
            return (
            <Link to={`/property/${house.id}`} key={index}>
              <House house={house}/>
            </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
};

export default HouseList;
 