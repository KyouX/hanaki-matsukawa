import './App.css';
import ItemCount from './components/Items/ItemCount';
import ItemListContainer from './components/Items/ItemListContainer';
import NavBar from './components/NavBar/NavBar'

function App() {

  const onAdd = (cantidad) => {
    console.log('se ha agregado ' + cantidad)
  }

  return (
    <div className="w-full h-screen bg-beige">
      <NavBar />
      <ItemListContainer greeting="Hola, muy pronto te traeremos las mejores experiencias con matcha.">
        <ItemCount stock={10} initial={1} onAdd={onAdd} />
      </ItemListContainer>
    </div>
  );
}

export default App;
