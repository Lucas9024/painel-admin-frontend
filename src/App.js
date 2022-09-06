import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Single from './pages/Single/Single'
import New from './pages/New/New'
import List from './pages/List/List'

function App() {

  return (

    <div className="App">

      <BrowserRouter>

      <Routes>

        <Route path="/">
          <Route index element={<Home />}/>
          <Route path="login" element={<Login />}/>
        </Route>

        {/** ao entrar nos produtos, podemos ir até o id do usuario*/}
        <Route path="users">
          <Route index element={<List />}/>
          <Route  path=":useId" element={<Single />}/>

          {/**Nesssa parte, podemos cadastrar um novo usuario */}
          <Route path="new" element={<New />}/>
        </Route>

        {/** ao entrar no user, podemos ir até o id do produto */}
        <Route path="products">
        <Route index element={<List />}/>
          <Route index path=":prodId" element={<Single />}/>

          {/**Nesssa parte, criamos um novo produto */}
          <Route path="new" element={<New />}/>
          
        </Route>

      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
