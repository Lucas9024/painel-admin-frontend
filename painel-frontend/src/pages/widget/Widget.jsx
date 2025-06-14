import React from 'react'
import './widget.scss'
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutline'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import InventoryIcon from '@mui/icons-material/Inventory';


const Widget = ({ propertys }) => {
  
  let info;

  switch(propertys){

    case "usuario": 
    info = {
      text: "Usuários",
      money: 300, 
      view: "Ver usuários cadastrados", 

      icon: (
        <PersonOutlinedIcon 
        className='icon'
        style={{color: 'red'}}
        />
      )
    }
    break;

    

    case "produtos": 
    info = {
      text:"Produtos", 
      money: 500, 
      view: "Ver produtos cadastrados", 
      icon: (
        <ShoppingCartOutlinedIcon 
        className="icon"
        style={{color: '#5e5e05'}}
        />
      )
    }
    break;

    case "estoque": 
    info = {
      text: "Estoque", 
      money: 200, 
      view: "Ver estoque", 
      icon: (
        <InventoryIcon 
        className="icon"
        style={{color: 'blue'}}
        />
      )
    }
    break;

    default:
    break;
  }


  return (

   
    <div className='widgetContainer'>

      <div className="primaryData">
          <span className='text'>{info.text}</span>
          <span className='money'>{info.money}</span>
          <span className="view">{info.view}</span>
      </div>
      <div className="secondData">
        <div className="porcen positive">
          <KeyboardArrowUp />
        <span>20 %</span>
        </div>
          
         {info.icon}
      </div>

    </div>
  )
}

export default Widget
