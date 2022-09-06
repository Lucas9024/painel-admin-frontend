import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Charts from '../../components/Charts/charts'
import './single.scss'


const Single = () => {

  return (
    <div className="container">

        <Sidebar />
        
        <div className='content'>

        <Navbar />
       <div className='topBottom'>
        <div className='top'>

          <span className="info">Informações do cliente</span>
          <span className='editbtn'>Editar</span>

          <div className="information">

            <img src="http://s2.glbimg.com/jsaPuF7nO23vRxQkuJ_V3WgouKA=/e.glbimg.com/og/ed/f/original/2014/06/10/461777879.jpg" alt="Imagem da pessoa" />

          <div className="infotexts">

            <div className="texts">
            <span> Nome do cliente: </span>
            <p>Claudio Suares</p>

            </div>
          
            <div className="texts">
            <span> Email do cliente: </span>
            <p>claudiosuar@gmail.com</p>
            </div>
           
            <div className='texts'>
            <span> Telefone / Celular: </span>
            <p>(55) 99845-1232</p>
            </div>
            <div className='texts'>
            <span> Endereço do cliente: </span>
            <p> Rua são algustino, Nº 385</p>
            </div>
         
          </div>
         
          </div>
        </div>

        <div className='bottom'>

          <Charts aspect={3 / 1} title="Ultimas movimentações"/>

        </div>
    </div>
       

      </div>
       

       
      </div>
  )
}

export default Single
