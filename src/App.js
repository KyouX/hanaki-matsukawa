import './App.css';
import ItemCount from './components/Items/ItemCount';
import ItemDetailContainer from './components/Items/ItemDetailContainer';
import ItemListContainer from './components/Items/ItemListContainer';
import NavBar from './components/NavBar/NavBar'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {

  const onAdd = (cantidad) => {
    console.log('se ha agregado ' + cantidad)
  }

  return (
    <Router>
      <div className="w-full min bg-beige pb-24">
        <NavBar />
        <div className='w-full h-screen flex flex-col items-center justify-center'>
          <Routes>

            <Route path="/" element={
              <ItemListContainer greeting="Hola, muy pronto te traeremos las mejores experiencias con matcha." />
            } />

            <Route path="/category/:id" element={
              <ItemListContainer categorized={true} greeting="Hola, muy pronto te traeremos las mejores experiencias con matcha." />
            } />

            <Route path="/item/:id" element={
              <ItemDetailContainer />
            } />

          </Routes>
        </div>

      </div>

    </Router>
  );
}

export default App;
