import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [text, setText] = useState("")
  const [todo, setTodo] = useState([])



function addTodo(event) {
  event.preventDefault();
  console.log(text);
  todo.push(text)
  setTodo([...todo]);
  console.log(todo);
  setText ("")
}

  return (
    <>
      <h2>Todo App {text}</h2>
      <form onSubmit={addTodo}>
        <input type="text" placeholder='Enter your text' onChange={(e)=>setText(e.target.value)} value={text}/>
        <button type='submit'>Add</button>
      </form>
      { <ul>
        {todo.map((item, index)=>{
          return <li key={index}>{item}
          <button onClick={()=>deleteTodo(index)}>delete</button><span> </span>
          <button onClick={()=>editTodo(index)}>edit</button><br></br><hr></hr>
            
          </li>
        })}
      </ul> }
        
    </>
  )
}

export default App
