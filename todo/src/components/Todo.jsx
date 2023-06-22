import React from 'react';

// O 'todo'(liha 4) seria a 'prop' para todos os dados do objeto no array na pagina 'App.jsx'(linha 11 a 30)
const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
      <div 
      className="todo" 
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
            <div className="content">
              {/* Imprimindo o conteudo que está no objeto todo(linha 35) */}
              <p>{todo.text}</p>
              <p>({todo.category})</p>
            </div>
            <div>
              <button className='complete' onClick={() => completeTodo(todo.id)}>Completar</button>
              <button className='remove' onClick={() => removeTodo(todo.id)}>x</button>
            </div>
        </div>
  )
}

export default Todo
