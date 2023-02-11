import React from 'react'
//Importing props from App.js as paramaters 
const Form = ({setInput, input, items, setItems}) => {
    //Functions
    const inputTextHandler = (e) => {
        //Gets the value from the target of the input in Form. Called on submit and creation of input on submit handler.
        setInput(e.target.value)
    };

    const submitItemHandler = (e) => {
        e.preventDefault();
        setItems([
            ...items, 
            { text: input, completed: false, id: Math.random() * 1000 },
        ]);
        //clears current input
        setInput("");
    };
  return (
    <form>
        <input value={input} type="text" className="todo-input" onChange={inputTextHandler}/>
        <button className="todo-button" type="submit" onClick={submitItemHandler}>
            <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
            <select name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    </form>
  )
}

export default Form