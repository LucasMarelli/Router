import './App.css';
import BrowserRouter from './components/browserRouter';
import Routes from './components/routes';
import Route from './components/route';

import React from "react";

function App() {
  React.useEffect(() => {
    // escucho al evento custom urlChanged y paso como argumento un callback que recibe el evento. Se va a ejecutar cada vez que se dispare el evento (document.dispatchEvent)
    document.addEventListener("urlChanged", (e) => {
      e.stopImmediatePropagation();
      console.log(e); 
    });
  }, []);

  const navigate = (newPath) => {
    // crea un evento custom nuevo al que ya estamos subscritos en el useEffect
    var pushChangeEvent = new CustomEvent("urlChanged", {
      detail: {
        path: newPath
      }
    });

    // cambio la url
    window.history.replaceState({}, '', newPath);
    
    // disparo el evento
    document.dispatchEvent(pushChangeEvent);
  }

  return (
    <BrowserRouter>
      <button onClick={() => navigate("/dashboard")}>Navegar a dashboard</button>
      <Routes>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
