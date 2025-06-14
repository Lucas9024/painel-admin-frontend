import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import './new.scss'

const New = ({inputs, title}) => {
  return (
    <div className='container'>
      <Sidebar />

          <div className='content'>

        <Navbar />

        <div className="blockTop">
          <span className='textUser'>
          {title}
          </span>
        </div>
        <div className='blockBottom'>

          </div>

        </div>
    </div>
  )
}

export default New
