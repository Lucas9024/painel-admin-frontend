import React from 'react'
import './navbar.scss'
import SearchOutlineIcon from '@mui/icons-material/SearchOutlined'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import FullscreeenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import ListOutlinedIcon from '@mui/icons-material/ListOutlined'
import imgProfile from '../../assets/myperfil.jpg'

const Navbar = () => {



  return (
    <div className='nav'>
      <div className="wrapper">
        <div className="search">
          <input placeholder='pesquisar' />
          <SearchOutlineIcon className='icon'/>
        </div>

        <div className="itens">

          <div className='item'>
          <LanguageOutlinedIcon className='icon'/>
          </div>
          <div className='item'>
          <DarkModeOutlinedIcon />
          </div>

          <div className='item'>
          <FullscreeenExitOutlinedIcon className='icon'/>
          </div>

          <div className='item'>
          <NotificationsNoneOutlinedIcon className='icon'/>
          <div className='counter'>
          1
          </div>
          </div>

          <div className='item'>
          <ChatBubbleOutlinedIcon className='icon'/>
          <div className='counter'>
          2
          </div>
          </div>

          <div className='item'>
          <ListOutlinedIcon className='icon'/>
          </div>

          <div className='item'>
            <img src={imgProfile} className="avatar"/>

          </div>

       

        </div>
      </div>
    </div>
  )
}

export default Navbar
