import './App.css';
import BrowserRouter from './components/browserRouter';
import Routes from './components/routes';
import Route from './components/route';

import React from "react";
import Link from './components/link';

function Home() {
  return <h1>Home!</h1>
}

function Merca() {
  return <h1>Merca!</h1>
}

function Falopa() {
  return <h1>Falopa!</h1>
}

function App() {
  return (
    <BrowserRouter>
      <div style={{ background: "red"}}>
      <Link to="/merca">
        <button>Merca</button>
      </Link>
      </div>
      <Routes>
        <Route path="/" element={Home}></Route>
        <Route path="/merca" element={Merca}></Route>
        <Route path="/falopa" element={Falopa}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
