import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import './home.scss'
const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <hr />
    <div className="homeContainer">
      <Navbar />
    </div>
    </div>

  )
}

export default Home
