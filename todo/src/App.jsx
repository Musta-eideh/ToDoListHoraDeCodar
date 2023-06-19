import { useState } from 'react'


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
          <div className="todo">
            <div className="content">
              {/* Imprimindo o conteudo que está no objeto todo(linha 35) */}
              <p>{todo.text}</p>
              <p>({todo.category})</p>
            </div>
            <div>
              <button>Completar</button>
              <button>x</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
