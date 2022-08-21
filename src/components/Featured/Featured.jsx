import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import './featured.scss'

const Featured = () => {
  return (
    <div className='featured'>
      <div className='initText'>
        <span className='text'> Total de vendas </span>
        <MoreVertIcon className='icone'/>
      </div>
    <div className='circules'>

      <div className="circleChart">

    <CircularProgressbar value={70} text={"70%"} strokeWidth={4}/>
    
      </div>

      <div className='textChart'>
          <span>
            Total de vendas dos ultimos meses 
          </span>

      </div>

    </div>

    </div>
  )
}

export default Featured
