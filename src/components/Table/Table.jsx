import React from 'react'
import Table from "@mui/material/Table"
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Paper from '@mui/material/Paper'
import TableBody  from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer';
import './table.scss'

const Tables = () => {

  const rows = [
    
    {
      id: 124567, 
      client: "Ferreira Garcia", 
      access: "2 de Fev",
      nameProduct: "Air fryer",
      img: "https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2021/12/22205656669410.jpg", 
      method: "Pagamento via pix",
      status: "Aprovado", 
    }, 

    {
      id: 223847, 
      client: "Gustavo dos Santos", 
      access: "23 de agosto", 
      nameProduct: "Torradeira",
      img: "https://m.media-amazon.com/images/I/61GHQQDk12L._AC_SX569_.jpg", 
      method: "Pagamento via cartão de débito", 
      status: "Pendente"
    }, 

    {
      id: 3445566, 
      client: "Célia ramos", 
      access: "23 de setembro", 
      nameProduct: "Geladeira consul", 
      img: "https://http2.mlstatic.com/D_NQ_NP_858667-MLA32581517193_102019-O.jpg", 
      method: "Pagamento via cartão de crédito", 
      status: "Aprovado"
    }, 

    {
      id: 435671, 
      client: "Afonso Pena dos Anjos", 
      access: "25 de setembro", 
      nameProduct: "Celular Azuz Zenfone Pro max", 
      img: "https://t2.tudocdn.net/493780?w=766&h=436", 
      method: "Pagamento via pix", 
      status: "Aprovado"
    }, 

    {
      id: 521964, 
      client: "matheus Severo Maia", 
      access: "13 de Outubro", 
      nameProduct: "computador Intelbras",
      img: "https://www.usadobrasil.com.br/sh-img/notebook-intelbras-D_NQ_NP_676015-MLB27951720446_082018-F_notebook%2Bintelbras.jpg", 
      method: "Pagamento via boleto", 
      status: "Pendente"
    }
  ]



  return (
    <TableContainer component={Paper} className="tableContainer">
    <Table sx={{ minWidth: 500}} aria-label="simples table">
      <TableHead>
        <TableRow>
          <TableCell>Id do produto</TableCell>
          <TableCell align="right">Cliente</TableCell>
          <TableCell align="right"> Acesso </TableCell>
          <TableCell align="right"> Nome do produto</TableCell>
          <TableCell align="right">Produto</TableCell>
          <TableCell align="right">Pagamento</TableCell>
          <TableCell align="right">Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.id}
          >
            <TableCell className='tablesCell'>
              {row.id}
            </TableCell>
            <TableCell className='tablesCell'>{row.client}</TableCell>
            <TableCell className='tablesCell'>{row.access}</TableCell>
            <TableCell className='tablesCell'>
              <div className="tbImgCarac">
              <img src={row.img} alt="imagem do produto" />
             {row.nameProduct}
              </div>
             
              </TableCell>
            <TableCell className='tablesCell'>{row.method}</TableCell>
            <TableCell className='tablesCell'>{row.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default Tables