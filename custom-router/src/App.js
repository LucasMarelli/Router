import './App.css';
import BrowserRouter from './components/browserRouter';
import Routes from './components/routes';
import Route from './components/route';
import React from "react";
import Link from './components/link';

function Home() {
  return <h1>Home!</h1>
}

function Hola() {
  return <h1>Hola!</h1>
}

function Chau() {
  return <h1>Chau!</h1>
}

function App() {
  return (
    <BrowserRouter>
      <div style={{ background: "red"}}>
      <Link to="/hola">
        <button>Ok!</button>
      </Link>
      </div>
      <Routes>
        <Route path="/" element={Home}></Route>
        <Route path="/hola" element={Hola}></Route>
        <Route path="/chau" element={Chau}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
