export const columns = [
  {field: 'id', headerName: 'ID', widht: 90}, 

  {
    field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
      return (
        <div className="imgPerson">
        <img src={params.row.img} alt="pessoas da tabela" />  
        {params.row.username}
        </div>
      )
    }
  }, 
  {
    field: "email", 
    header: "email", 
    width: 200
  }, 
  {
    field: "age", 
    header: "age", 
    width: 100
  }, 
  {
    field: "status", 
    header: "status", 
    width: 100, 
    renderCell: (params) => {
      return (
        <div className={`widthStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      )
    }
  }

]

//Dados temporários 

export const rows = [
  {
    id: 1, 
    username: "Lucas Silveira", 
    img: "http://s2.glbimg.com/jsaPuF7nO23vRxQkuJ_V3WgouKA=/e.glbimg.com/og/ed/f/original/2014/06/10/461777879.jpg",
    email: "luc@gmail.com", 
    age: "21", 
    status: "ativo"
  },
  {
    id: 2, 
    username: "Caio Afonso", 
    img: "https://concursos.adv.br/wp-content/uploads/2021/10/direitos-das-pessoas-com-autismo-nos-concursos-publicos.jpg",
    email: "caioAf@gmail.com", 
    age: "28", 
    status: "pendente"
  },
  {
    id: 3, 
    username: "Alice braga", 
    img: "https://superafarma.com.br/wp-content/uploads/2020/04/sem-nome-800-x-500-px-1600-x-1000-px-2.png",
    email: "alicebraganeto@outlook.com", 
    age: "25", 
    status: "ativo"
  },
  {
    id: 4, 
    username: "Daniel pena", 
    img: "https://www.autismoemdia.com.br/wp-content/uploads/2020/03/autismo-no-mercado-de-trabalho-desafios-e-oportunidades.jpeg",
    email: "danielpena2087@outlook.com", 
    age: "32", 
    status: "aguardando"

  },
  {

    id: 5, 
    username: "Roberta Salles", 
    img: "http://m.leiaja.com/sites/default/files/field/image/noticias/2019/03/Karina%20Medrado.jpg",
    email: "robertasalesnogueirassrr@outlook.com", 
    age: "29", 
    status: "pendente"

  },
  {
    
    id: 6, 
    username: "Eduardo carlos", 
    img: "https://midias.correiobraziliense.com.br/_midias/jpg/2022/04/01/750x500/1_dia_mundial_do_autismo-7691811.jpeg",
    email: "edu.carlosmedeiros@hotmail.com", 
    age: "36", 
    status: "aguardando"
  },
  {
    
    id: 7, 
    username: "alcides assunção", 
    img: "https://www.folhavitoria.com.br/geral/blogs/livrepensar/wp-content/uploads/2021/11/WhatsApp-Image-2021-11-14-at-09.05.15-800x500.jpeg",
    email: "alcidesassuncao9933@outlook.com", 
    age: "26", 
    status: "ativo"
  },
  {
    
    id: 8, 
    username: "Rick hendrix", 
    img: "https://autismoemtraducao.files.wordpress.com/2015/09/840df2011a15a425c943314c6a464788.jpg",
    email: "rick.hen25@uol.com", 
    age: "38", 
    status: "pendente"

  },
  {
    
    id: 9, 
    username: "Roberto alves", 
    img: "https://www.psicologosberrini.com.br/wp-content/uploads/como-lidar-com-pessoas-arrogantes-no-trabalho.jpg",
    email: "robertoalvesgold@gmail.com", 
    age: "27", 
    status: "ativo"

  }
]