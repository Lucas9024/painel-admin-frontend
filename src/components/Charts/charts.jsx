import React from 'react'
import { LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  AreaChart, 
  Area,
  ResponsiveContainer } from 'recharts';

import './charts.scss'

const data = [
  {name: 'Janeiro', Total: 200}, 
  {name: 'Fevereiro', Total: 450}, 
  {name: 'Março', Total: 108}, 
  {name: 'Abril', Total: 340}, 
  {name: 'Maio', Total: 133}, 
  {name: 'Junho', Total: 230}, 
  {name: 'agosto', Total: 560}, 
  

  
]


const Charts = ({ aspect, title }) => {
  return (

    <div className="charts">
      <div className="title">
        {title}
      </div>
      <ResponsiveContainer width="100%" aspect={aspect}>

      <AreaChart width={730} height={280} data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
      <defs>
        <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#6562a7" stopOpacity={0}/>
        </linearGradient>
      
      </defs>
      <XAxis dataKey="name" stroke='gray'/>
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" className='chartGrid'/>
      <Tooltip />
      <Area type="monotone" 
      dataKey="Total" 
      stroke="#8884d8" 
      fillOpacity={1} 
      fill="url(#total)" />
    </AreaChart>


    </ResponsiveContainer>
    </div>

    
  )
}

export default Charts
