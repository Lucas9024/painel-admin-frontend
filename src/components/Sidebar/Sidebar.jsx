import React from 'react'
import './sidebar.scss'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Sidebar = () => {

  //barra lateral da minha aplicação
  
  return (

    <div className='sidebar'>

      <div className="init">
        <span className='logotipo'>Store admin</span>
      </div>

      <hr />

      <div className='middle'>
      <ul>
        <li>
          <LocalMallIcon className="icon" />
          <span>compras</span>
        </li>
        <li>
          <MonetizationOnIcon className="icon" />
          <span>vendas</span>
        </li>
        <li>
          <LocalAtmIcon className="icon"/>
          <span>Faturamento da plataforma</span>
          
        </li>
        <li>
         
         <SettingsApplicationsIcon className="icon"/>
          <span>Configurações</span>
        </li>

        <li>
        <AccountBoxIcon className="icon"/>
          <span>Ir para perfil</span>
        </li>
        <li>
          <ExitToAppIcon className="icon"/>
          <span>Sair</span>
        </li>
      </ul>
      </div>

      <div className='finish'>

      </div>

    </div>

  )


}

export default Sidebar
