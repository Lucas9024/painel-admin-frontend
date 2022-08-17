import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Single from './pages/Single/Single'
import New from './pages/New/New'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />}/>
          <Route path="login" element={<Login />}/>
        </Route>
        <Route path="users">
          <Route index path=":useId" element={<Single />}/>
          <Route path="new" element={<New />}/>
        </Route>
        <Route path="products">
          <Route index path=":prodId" element={<Single />}/>
          <Route path="new" element={<New />}/>
        </Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
