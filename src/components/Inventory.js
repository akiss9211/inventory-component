import React from 'react'
//import components
import Items from './Items'

const Inventory = ({items}) => {
  return (
    <div className="todo-container">
        <ul className="todo-list">
            {items.map(item => (
                <Items text={item.text} />
            ))}
        </ul>
    </div>
  )
}

export default Inventory