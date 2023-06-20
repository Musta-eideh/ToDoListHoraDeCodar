import React from 'react';

// O 'todo'(liha 4) seria a 'prop' para todos os dados do objeto no array na pagina 'App.jsx'(linha 11 a 30)
const Todo = ({ todo }) => {
  return (
      <div className="todo">
            <div className="content">
              {/* Imprimindo o conteudo que está no objeto todo(linha 35) */}
              <p>{todo.text}</p>
              <p>({todo.category})</p>
            </div>
            <div>
              <button className='complete'>Completar</button>
              <button className='remove'>x</button>
            </div>
        </div>
  )
}

export default Todo
