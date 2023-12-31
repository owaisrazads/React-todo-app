import { useState } from 'react'



function App() {
  const [text, setText] = useState("")
  const [todo, setTodo] = useState([])



function addTodo(event) {
  event.preventDefault();
  console.log(text);
  if (text !== "") {
    todo.push(text)
    setTodo([...todo]);
    console.log(todo);
    setText ("")
  }else{
    alert('Please enter something')
  }
}

//function delete Todo

function deleteTodo(index) {
  const deleteTodo = [...todo];
  deleteTodo.splice(index, 1)
  setTodo(deleteTodo)
}


//function Edit Todo

function updateTodo(index) {
  const updatedText = prompt('Update Todo', todo[index]);
  if (updatedText !== '') {
    const updatedTodos = [...todo];
    updatedTodos[index] = updatedText;
    setTodo(updatedTodos)
  }else{
    alert('Please enter something')
  }
}
  return (
    <>
      <h2>Todo App </h2>
      <div className="container">
      <form onSubmit={addTodo}>
        <input type="text" placeholder='Enter your text' onChange={(e)=>setText(e.target.value)} value={text}/>
        <button className='add-btn' type='submit'>Add</button>
      </form>
      <hr />
      </div>
      { <ul>
        {todo.map((item, index)=>{
          return <li key={index}>{item}
          <button className='dlt-btn' onClick={()=>deleteTodo(index)}>delete</button><span> </span>
          <button className='edit-btn' onClick={()=>updateTodo(index)}>edit</button><br></br><hr></hr>
          </li>
        })}
      </ul> }
        
    </>
  )
}

export default App
