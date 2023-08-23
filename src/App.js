import './dndinventory.css';
import { useState, useEffect } from 'react';
import Card from './components/Card';
import Inventory from './components/Inventory';

const App = () => {
  //storing API JavaScript object data into a state managed array
  const [items, setItems] = useState([]);
  //storing selected inventory items in state managed array to be rendered
  const [inventory, setInventory] = useState([]);
  //state to hold and update current filter string from input
  const [filter, setfilter] = useState();

  //gets local storage inventory save and sets inventory state with data
  //by parsing into JS objects
  //checks to see if inventory save exists in local storage before retrieving
  useEffect(() => {
          const localInventory = localStorage.getItem('inventory-items');
          if (localInventory !== null) { 
            setInventory(JSON.parse(localInventory));
          }
  }, []);

  //sends inventory state data to local storage
  useEffect(() => {
    if(inventory.length) {
      localStorage.setItem('inventory-items', JSON.stringify(inventory))
    }
  }, [inventory]);
  
  //API fetch to return items as JS objects in promises
  useEffect(() => {
    fetch('https://www.dnd5eapi.co/api/equipment')
        // promise that returns json data into JavsScript Objects
        .then(res => res.json())
        // promise takes data and places it into state for direct access
        .then(resJson => {
            setItems(resJson.results)
        })
  }, [])
  //passing props down to card and inventory child components with state data to be used
  return (
    <div className="App">
      <div className='component-container-invapp'>
        <Card items={items} setInventory={setInventory} inventory={inventory} filter={filter} setfilter={setfilter}/>
        <Inventory inventory={inventory} setInventory={setInventory}/>
      </div>
    </div>
  );
};

export default App;
