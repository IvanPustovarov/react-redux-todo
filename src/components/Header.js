import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import "../style/main.css";
const Header = () => {
  const [text, setText] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const dispatch = useDispatch()

  const handleChange = (event) => {
    const text = event.target.value;
    setIsDisabled(text.trim().length === 0);
    setText(text);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setText(text.trim())
    dispatch({type: 'todos/todoAdded', payload: text})
    setText("")
  }

  return (
    <header className="main">
      <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={text}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <button type="submit" onSubmit={()=> handleSubmit} disabled={isDisabled}>Send</button>
      </form>
    </header>
  )
}

export default Header
