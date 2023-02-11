import React, {useState} from 'react';
import './App.css';
//Importing components
import Form from './components/Form';
import Inventory from './components/Inventory';

const App = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Inventory</h1>
      </header>
      <Form items={items} 
            setItems={setItems} 
            setInput={setInput}
            input={input}
      />
      <Inventory items={items}/>
    </div>
  );
};
// Form setInput={} is creating a prop to call the setInput function

export default App;
