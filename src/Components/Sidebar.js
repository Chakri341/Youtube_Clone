import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen=useSelector(store =>store.app.isMenuOpen);
  
  if(!isMenuOpen) return null; //early return and we can also use terinary
  
  return (
    <div className='p-8 shadow-lg m-3'>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <h1 className='font-bold pt-5'>You</h1>
      <ul>
        <li>Your Channel</li>
        <li>History</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
        <li>Downloads</li>
      </ul>
      <h1 className='font-bold pt-5'>Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Films</li>
      </ul>
      <h1 className='font-bold pt-5'>More from Youtube</h1>
      <ul>
        <li>YouTube Studio</li>
        <li>Youtube Music</li>
        <li>YouTube Kids</li>
      </ul>
      <ul className='pt-5'>
        <li> Settings</li>
        <li> Report History</li>
        <li> Help</li>
        <li> Send Feedback</li>
      </ul>
    </div>
  )
}
export default Sidebar;
