import React from 'react'
import Datatable from '../../components/Datatable/Datatable'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import './list.scss'

const List = () => {
  return (
          <div className='list'>

            <Sidebar />

            <div className="Container">

            <Navbar />
            
            <Datatable />
            </div>

          </div>
  )
}

export default List
