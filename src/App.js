import Item from './components/Item';
import Card from './components/Card';

// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <h1>Aplicação com React</h1>
    <ul>
      <Item texto="Item 1"/>
      <Item texto="Item 2"/>
      <Item texto="Item 3"/>
    </ul>
    
    <Card valor="Adicionar"/>
    <Card valor="Remover"/>

    </>
  );
}

export default App;
