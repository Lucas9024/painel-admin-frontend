import React from 'react'
import './navbar.scss'
import imgProfile from '../../assets/myperfil.jpg'
import {BiSearchAlt} from 'react-icons/bi'
import {FcGlobe } from 'react-icons/fc'
import {GiMoon} from 'react-icons/gi'
import {GrNotification} from 'react-icons/gr'
import {AiOutlineComment} from 'react-icons/ai'
import {MdList} from 'react-icons/md'

const Navbar = () => {


// barra horizontal da minbha aplicação
  return (
    <div className='nav'>
      <div className="wrapper">
        <div className="search">
          <input placeholder='pesquisar' />
          <BiSearchAlt className='iconSearch'/>
        </div>

        <div className="itens">

          <div className='item'>
          <FcGlobe className='icon'/>
          </div>
          <div className='item'>
          <GiMoon className='icon' />
          </div>

          <div className='item'>
          <GrNotification className='iconNoti'/>
          <div className='counter'>
          1
          </div>
          </div>

          <div className='item'>
          <AiOutlineComment className='iconMsg'/>
          <div className='counter'>
          2
          </div>
          </div>

          <div className='item'>
          <MdList className='iconList'/>
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
