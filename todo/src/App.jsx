import { useState } from 'react';

import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

import './app.css'; 


function App() {

  // Colocar os dados vamos utilizar setTodos
  // Consultar os dados vamos utilizar o todos
  const [todos, setTodos] = useState([
    {
      id:1,
      text: "Criar funcionalidade X no sistema",
      category:"Trabalho",
      isCompleted: false,
    },
    {
      id:2,
      text: "Ir para a academia",
      category:"Pessoal",
      isCompleted: false,
    },
    {
      id:3,
      text: "Estudar React",
      category:"Estudos",
      isCompleted: false,
    },
  ]);

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {/* Exibindo todos os Todo com map*/}
        {todos.map((todo) => (
          // Componente precisa funcionar passando a prop 'todo' presente na pasta Todo.jsx
          // Logo se utiliza a propriedade todo que passa um objeto
          <Todo todo={todo}/>
        ))}
      </div>
      <TodoForm />
    </div>
  )
}

export default App
