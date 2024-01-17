import React, { useEffect,useState } from 'react';
import {youtube_video_api} from '../Utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
const [videos, setVidoes]=useState([]);


  useEffect(()=>{
      getVideos();
    },[]);

    const getVideos= async() => {
    const data= await fetch(youtube_video_api);
    const json= await data.json();
    setVidoes(json.items);
  };

  if(!videos) return null;
  
  return(
    <div className='flex flex-wrap'>
    {videos.map(video=> 

    <Link key={video.id} to={'/watch?v='+video.id}>
      <VideoCard info={video} />
    </Link>)}
    
    </div>
  )
  };

export default VideoContainer;
