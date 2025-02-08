import React, { useState, useEffect, useMemo, memo } from 'react';

const TodoItem = memo(({ todo }) => {
  console.log('Rendering TodoItem:', todo);
  return <li>{todo}</li>;
});

const App = () => {
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState('');
  

  const totalTodos = useMemo(() => todos.length, [todos]);


  const addTodo = () => {
    setTodos((prevTodos) => [...prevTodos, 'New todo']);
  };


  const addCustomTodo = () => {
    if (input.length > 5) {
      setTodos((prevTodos) => [...prevTodos, input]);
      setInput('');
    } else {
      alert('Task must be more than 5 characters long.');
    }
  };


  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  useEffect(() => {
    console.log('Counter updated:', counter);
  }, [counter]);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Todo List</h2>
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} />
        ))}
      </ul>
      <p>Total Todos: {totalTodos}</p>

      <h3>Add a Custom Todo</h3>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task (min 6 chars)"
      />
      <button onClick={addCustomTodo}>Submit</button>

      <h3>Counter</h3>
      <p>Counter: {counter}</p>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
};

export default App;
