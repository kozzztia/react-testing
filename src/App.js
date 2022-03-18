import React from 'react';
import TodoList from './components/TodoList.jsx';
import './style/style.css';


function App() {
  return (
    <div className="App">
      <TodoList name = "TodoList" id = "number"/>
    </div>
  );
}

export default App;
