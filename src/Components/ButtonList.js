import React from 'react'
import Buttons from './Buttons';

const ButtonList = () => {
  const categoryList = [
    "All",
    "Music",
    "Gaming",
    "News",
    "Movies",
    "Sports",
    "Travel",
    "Fashion",
    "Technology",
    "Cooking",
    "Education",
    "Comedy",
    "Fitness",
    "Education",
    "Comedy",
    "Fitness",
  ]; 
  return (
    <div className='flex overflow-x-scroll'>
      {categoryList.map((e, index)=>{
        return <Buttons key={index} name={e}/>
      })}
      <Buttons name/>
    </div>
  )
}

export default ButtonList;
