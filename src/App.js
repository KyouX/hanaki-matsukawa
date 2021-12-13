import './App.css';
import ItemCount from './components/Items/ItemCount';
import ItemDetailContainer from './components/Items/ItemDetailContainer';
import ItemListContainer from './components/Items/ItemListContainer';
import NavBar from './components/NavBar/NavBar'

function App() {

  const onAdd = (cantidad) => {
    console.log('se ha agregado ' + cantidad)
  }

  return (
    <div className="w-full min bg-beige pb-24">
      <NavBar />
      <ItemListContainer greeting="Hola, muy pronto te traeremos las mejores experiencias con matcha.">
        <ItemCount stock={10} initial={1} onAdd={onAdd} />
      </ItemListContainer>
      <ItemDetailContainer id="A01"/>
    </div>
  );
}

export default App;
