import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Widget from '../widget/Widget'
import Featured from '../../components/Featured/Featured'
import Charts from '../../components/Charts/charts'
import Tables from '../../components/Table/Table'
import './home.scss'



const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <hr />
    <div className="homeContainer">
      <Navbar />
      <div className='homeWidget'>
      <Widget propertys="usuario"/>

      <Widget propertys="produtos"/>

      <Widget propertys="estoque"/>
      </div>

      <div className="chartContainer">

      <Featured />
        <Charts title="Vendas dos ultimos 6 meses" aspect={2 / 1}/>
      
      </div>

        <div className='tableHome'>
        <spap>ultimas movimentações</spap>
        <Tables />
        </div>
    </div>

    </div>

  )
}

export default Home
