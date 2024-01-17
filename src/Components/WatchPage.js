import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../Utils/appSlice';
import { useSearchParams } from 'react-router-dom'; 
import CommentsConatiner from './CommentsConatiner';
import LiveChat from './LiveChat';

const WatchPage = () => {

  const dispatch=useDispatch();

  const [searchParams]=useSearchParams();
  console.log(searchParams.get('v'));

  useEffect(()=>{
    dispatch(closeMenu());   
    // eslint-disable-next-line   
  }, []);
  return (
    <div className='flex flex-col w-full'>
      <div className='px-5 flex'>
        <div className=''>
          <iframe 
            width="1000" height="500" 
            src={"https://www.youtube.com/embed/"+searchParams.get('v')}
            title="YouTube video player" frameborder="0" allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;web-share" allowFullScreen>
          </iframe>
         </div>
        <div className='w-full'>
          <LiveChat/>
        </div>
      </div>
      <CommentsConatiner/>
    </div>
  )
};

export default WatchPage;
