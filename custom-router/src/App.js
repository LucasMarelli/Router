import './App.css';
import BrowserRouter from './components/browserRouter';
import Routes from './components/routes';
import Route from './components/route';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
