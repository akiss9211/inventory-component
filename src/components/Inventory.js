import React from 'react'

function Inventory({ inventory, setInventory }) {
  return (
    <div className='inventory-container'>
        <h1 className='inv-h1'>Inventory</h1>
        <div className='inv-items-div'>
            {inventory.map(invItem => {
                return <div className='rendered-items'>
                    <div className='display-item'>{invItem.name}</div>
                    <button className='inv-button' value={invItem.uuid} onClick={(e) => setInventory(inventory.filter(item => item.uuid !== e.target.value))}>X</button>
                </div>
            })}
        </div>
    </div>
  )
}

export default Inventory