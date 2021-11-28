import './App.css';
import ItemListContainer from './components/Items/ItemListContainer';
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <div className="w-full h-screen bg-beige">
      <NavBar />
      <ItemListContainer greeting="Hola, muy pronto te traeremos las mejores experiencias con matcha."/>
    </div>
  );
}

export default App;
