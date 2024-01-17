import React, { useEffect, useState } from 'react';
import hamburger from "../Images/hamburger.png"
import logo from "../Images/youtube_logo.png"
import user from "../Images/user.png"
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../Utils/appSlice';
import { youtube_search_api } from '../Utils/constants';
import {cacheResults} from '../Utils/searchSlice';

const Head = () => {
  const [searchQuery,setSearchQuery]= useState("");
  const [suggest, setSuggest]=useState([]);
  const [showSuggestions, setShowSuggestions]=useState(false);
  
  const searchCache=useSelector(store=>store.search);
  const dispatch=useDispatch();


  useEffect(()=>{
    const timer=setTimeout(()=>{
      if(searchCache[searchQuery]){
        setSuggest(searchCache[searchQuery]);
      }else{
        callSuggestionsApi();
      }
      }  , 200);
    return ()=>{
      clearTimeout(timer);
    };

    // eslint-disable-next-line
     }, [searchQuery]);

  const callSuggestionsApi = async ()=>{
    const data =await fetch(youtube_search_api+searchQuery);
    const json= await data.json();
    setSuggest(json[1]);
    dispatch(cacheResults({
      [searchQuery]:json[1],
    }))
  }



  const toggleMenuHandler=()=>{
    dispatch(toggleMenu());
  };

  return (
    <>
    <div className='grid grid-flow-col p-3 m-2 shadow-lg'>

      <div className='flex col-span-1'>
      <img className='h-8 cursor-pointer' onClick={()=>toggleMenuHandler()} alt="hamburger" src={hamburger} />
      <img alt="logo" src={logo} className='h-8 mx-2'/>
      </div>


      <div className='col-span-10'>

        <div>
          <input 
         type='text'
         className='px-5 w-1/2 border border-slate-400 p-1 rounded-l-full'
         value={searchQuery}
         onChange={(e)=>setSearchQuery(e.target.value)}
         onFocus={()=>{
          setShowSuggestions(true);
          // console.log("Focus event triggered");
         }}
         onBlur={() => {
          setShowSuggestions(false);
          // console.log("Blur event triggered");

        }}
         />
        <button className='border border-slate-400 p-1 rounded-r-full'>Search</button>
      </div >

       {showSuggestions && (
       <div className='fixed bg-white py-2 px-5 w-[570px]  shadow-lg rounded-lg border border-gray-100 '>
        <ul>
            {suggest.map((s) => (
         <li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-100'> 🔍{s}</li>
            ))}  
        </ul>
        </div>
        )} 

        </div>


      <div className='col-span-1'>
        <img alt="user" src={user} className='h-8'/>
      </div>
    </div>
    </>
  );
};

export default Head;
